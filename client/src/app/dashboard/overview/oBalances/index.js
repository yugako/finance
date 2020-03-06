import React, {useState, useEffect, useCallback} from 'react';

import { useData } from '../../../../hooks/data.hook';

import BalancesCard from './obCard';
import AccountPlaceholder from '../../../../components/dashboard/account/placeholder';

import './index.scss';

const OverviewBalances = () => {
    const {fetchDataList} = useData();
    
    const [accounts, setAccounts] = useState();
    const [activities, setActivities] = useState();

    const getAccounts = useCallback(async () => {
        try {
            const accounts = await fetchDataList('account');

            setAccounts(accounts);
        } catch(e) {
            console.log(e);
        }
    });

    const getActivities = useCallback(async () => {
        try {
            const activities = await fetchDataList('activity');

            setAccounts(activities);
        } catch(e) {
            console.log(e);
        }
    });

    useEffect(() => {
        getAccounts();
        getActivities();
    }, [getAccounts, getActivities]);


    const accountActivity = (accountName, accountBalance) => {
        const current = activities && activities.filter(activity =>  activity.accountName === accountName);

        const data = current && current.map(c => {
            return {
                date: new Date(c.activityDate).getTime(),
                currentBalance: parseFloat(accountBalance) - c.activitySpendings
            };
        }).sort((a,b) => a.date - b.date).reverse();

        return data;
    }

    return (
        <>
           <div className='dashboard-overview__balances'>
                <div className="dashboard-overview__balances-header d-flex justify-content-between align-items-center flex-wrap">
                    <div className="dashboard-overview__balances-title">
                        Balances
                    </div>
                    {accounts && !accounts.length
                        ?  <div className="dashboard-overview__balances-subtitle">
                                Seems you don't have an account yet. Let's create it.
                            </div>
                        : null
                    }
                </div>
                <div className="row">
                    {accounts && accounts.length
                        ? accounts.map(account => {
                            return (
                                <div className="col-12 col-lg-4" key={account._id}>
                                    <BalancesCard
                                        title={account.accountName}
                                        link={account._id}
                                        money={account.balance}
                                        currency={account.accountCurrency} 
                                        datas={accountActivity(account.accountName, account.balance)}/>
                                </div>
                            )})
                        : <>
                                <AccountPlaceholder />
                                <AccountPlaceholder />
                                <AccountPlaceholder />
                          </> 
                    }
                </div>
            </div>
        </> 
        
    );
}

    

export default OverviewBalances;