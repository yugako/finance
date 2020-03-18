import React, { useState, useEffect, useCallback} from 'react';

import { useParams } from 'react-router-dom';
import { useData } from '../../../../hooks/data.hook';

import toogleProgress from '../../../../hooks/progress.hook';

import AccountActions from './accountComponents/actions';
import AccountTrend from './accountComponents/trend';
import AccountPie from './accountComponents/pie';

import Headline from '../../../../components/dashboard/headline';
import Loader from '../../../../components/elements/Loader';
import ActivitySingle from '../../overview/oActivity/oActivitySingle';

import './index.scss';
import Tabs from '../../../../components/elements/Tabs';

const options = [
    { value: 'default', label: 'Choose period' },
    { value: 'full', label: 'All time' },
    { value: 'day', label: 'Current Day' },
    { value: 'week', label: 'Current Week' },
    { value: 'month', label: 'Current Month' },
    
];

const SingleAccount = () => {
    const [account , setAccount] = useState(null);
    const [activities , setActivities] = useState(null);

    const [progress, setProgress] = useState();
    const [plotData, setPlotData] = useState(); 
    const [label, setLabel] = useState(); 

    const {fetchDataList, fetchDataSingle} = useData();

    const accountId = useParams().id;

    const accountActivity = (accountName, accountBalance) => {
        const current = activities && activities.filter(a =>  a.accountName === accountName);

        const data = current && current.map(c => {
            return {
                sortDate: new Date(c.activityDate).getTime(),
                date: new Date(c.activityDate).toLocaleDateString(),
                averageBalance: parseFloat(accountBalance) - c.activitySpendings
            };
        }).sort((a,b) => a.sortDate - b.sortDate);

        return data;
    }

     const changeHandler = event => {
        if(account) {
            const result = accountActivity(account.accountName, account.balance);
       
            const { plotData, percentProgress, label } = toogleProgress(event.target.value, result, account.balance);

            setPlotData(plotData);
            setProgress(percentProgress);
            setLabel(label);
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
                    Current balance: <span className={account.balance >= 0 ? 'positive' : 'negative'}>{account.balance} {account.accountCurrency}</span> 
                </div>
                {/* <Tabs 
                    headings={['Balance', 'Overview']} 
                    content={[<AccountTrend data={plotData} />, <AccountPie data={plotData} />]} 
                /> */}
             </div>

             <div className="account-period">
                 <div className="account-period__title">
                    <h4>Note:</h4>
                    Would you like to see some trends <span>about your spendings?</span> Then click on the dropdown below and recognize how much did you spend for different needs.
                    <span>First graph</span> will show for you balance trend which is specific for some period of time. <span>Second</span> will show for you how much did you spend for specific type of activities. 
                 </div>
                 <div className="account-period__dropdown">
                    <i className="far fa-calendar"></i>
                    <select onChange={changeHandler} className='account-period__select' name="period" id="period">
                        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                 </div>
                
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    
                    {progress && 
                        <div className='account-balance__progress'>
                            <span className={parseFloat(progress) < 0 ? 'negative': '' }>{progress}</span>&nbsp;
                            {label}
                        </div>
                    }
                    {plotData && <AccountTrend data={plotData} />}
                    
                </div>
                <div className="col-12 col-lg-6 align-self-center">
                   <AccountPie data={plotData} />
                </div>
            </div>
           
            <div className="account-activity">
                <h3 className='account-activity__title'>Recent account activity: </h3>
                {activities 
                    ?
                        <div className="account-activity__list">
                            {activities.map(a => {
                                return (
                                    <ActivitySingle  key={a._id}
                                        title={a.activityName}
                                        date={a.activityDate}
                                        amount={a.activitySpendings}
                                        account={a.accountName}
                                    />  
                                );
                            })}
                        </div>
                    : 
                        <div>You don't have any activity for that account</div>
                }
            </div>
                
        </section>
    );
}
 
export default SingleAccount;