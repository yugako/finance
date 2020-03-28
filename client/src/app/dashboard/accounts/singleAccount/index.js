import React, { useState, useEffect, useCallback} from 'react';

import { useParams } from 'react-router-dom';
import { useData } from '../../../../hooks/data.hook';

import toogleProgress from '../../../../hooks/progress.hook';
import AccountActions from './accountComponents/actions';

import Headline from '../../../../components/dashboard/headline';
import Loader from '../../../../components/elements/Loader';

import Tabs from '../../../../components/elements/Tabs';
import BalanceOveview from './accountComponents/balanceOverview';
import AccountActivity from './accountComponents/accountActivity';

import activitySpendingsBar from '../../../../hooks/chart.hook';


import './index.scss';


const SingleAccount = () => {
    const [account , setAccount] = useState(null);
    const [activities , setActivities] = useState(null);

    const [progress, setProgress] = useState();
    const [plotData, setPlotData] = useState(); 
    const [label, setLabel] = useState();
    const [pieData, setPieData] = useState(); 

    const {fetchDataList, fetchDataSingle} = useData();

    const accountId = useParams().id;

    const accountActivity = (accountName, accountBalance=1) => {
        const current = activities && activities.filter(a =>  a.accountName === accountName);

        const data = current && current.map(c => {
            return {
                sortDate: new Date(c.activityDate).getTime(),
                date: new Date(c.activityDate).toLocaleDateString(),
                averageBalance: parseFloat(accountBalance) - c.activitySpendings
            };
        }).sort((a,b) => a.sortDate - b.sortDate);

        return {data, current};
    }

     const changeHandler = event => {
        if(account) {
            const {data, current} = accountActivity(account.accountName, account.balance);
       
            const { plotData, percentProgress, label, initPieData } = toogleProgress(event.target.value, data, account.balance, current);

            const pieData = activitySpendingsBar(initPieData, account.accountCurrency);
            
            setPlotData(plotData);
            setProgress(percentProgress);
            setLabel(label);
            setPieData(pieData);
        }
    }

    const getAccount = useCallback(async () => {
        const accountSingle = await fetchDataSingle('account', accountId);

        setAccount(accountSingle);

    }, [accountId, fetchDataSingle]);

    const getActivities = useCallback(async () => {
        const activities = await fetchDataList('activity');
        
        setActivities(activities);
    }, [fetchDataList]);

    const getAccountActivities = () => {
        
        if(activities && account) {
            const {current} = accountActivity(account.accountName);
            return current;
        }
    }

    useEffect(() => {
        getAccount();
        getActivities();
    }, [getAccount, getActivities]);

    if(!account) {
        return (
            <Loader />
        )
    }

    return (
         <section className='account'>
             <div className="account-header">
                <Headline title={`Account: ${account.accountName}`} />
                <AccountActions />

                <div className="account-balance">
                    Current balance: <span className={account.balance >= 0 ? 'positive' : 'negative'}>{account.balance}</span>
                    <span className='account-balance__currency'>{account.accountCurrency}</span> 
                </div>
            
                <Tabs 
                    headings={['Balance trends', 'Recent Activity']} 
                    content={
                        [
                            <BalanceOveview 
                                plotData={plotData}
                                pieData={pieData}
                                isData={Array.isArray(getAccountActivities()) && getAccountActivities().length > 0 ? true : false} 
                                progress={progress} 
                                label={label} 
                                currency={account.accountCurrency}
                                changeHandler={changeHandler}  
                            />, 
                            <AccountActivity activities={getAccountActivities()} />
                        ]
                    } 
                />
             </div>
        </section>
    );
}
 
export default SingleAccount;