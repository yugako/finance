import React, { useState, useCallback, useEffect } from 'react';
import BalancesCard from './obCard';

import Loader from '../../../../components/elements/Loader';
import AccountPlaceholder from '../../../../components/dashboard/account/placeholder';

import { useData } from '../../../../hooks/data.hook';

import './index.scss';

const OverviewBalances = () => {
    const [accounts, setAccounts] = useState();
    const [activities, setActivities] = useState();

    const { fetchDataList } = useData();

    const getAccounts = useCallback(async () => {
        const accountsList = await fetchDataList('account');

        setAccounts(accountsList);
    }, [fetchDataList]);

    const getActivity = useCallback(async () => {
        const activityList = await fetchDataList('activity');

        setActivities(activityList);
    }, [fetchDataList]);

    useEffect(() => {
        getAccounts();
        getActivity();
    }, [getAccounts, getActivity]);

    if(!accounts) {
        return (
            <Loader />
        )
    }

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
                    { accounts 
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