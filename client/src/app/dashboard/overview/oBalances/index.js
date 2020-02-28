import React from 'react';

import { useAPI } from '../../../../context/DataContext';

import BalancesCard from './obCard';
import AccountPlaceholder from '../../../../components/dashboard/account/placeholder';

import './index.scss';

const OverviewBalances = () => {
    const { accounts, activities } = useAPI();

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
                    {!accounts 
                        ?  <div className="dashboard-overview__balances-subtitle">
                                Seems you don't have an account yet. Let's create it.
                            </div>
                        : null
                    }
                </div>
                <div className="row">
                    {accounts 
                        ? accounts.map(account => {
                            return (
                                <div className="col-12 col-lg-4" key={account._id}>
                                    <BalancesCard
                                        title={account.acountName}
                                        link={account._id}
                                        money={account.balance}
                                        currency={account.accountCurrency} 
                                        datas={accountActivity(account.acountName, account.balance)}/>
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