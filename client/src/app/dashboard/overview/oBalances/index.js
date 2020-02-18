import React, { useState, useContext, useCallback, useEffect } from 'react';
import BalancesCard from './obCard';

import { useHttp } from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';
import Loader from '../../../../components/elements/Loader';

const options = [
    { value: 'current_week', label: 'Current Week' },
    { value: 'current_month', label: 'Current Month' },
    { value: 'current_quater', label: 'Current Quater' }
];

const OverviewBalances = () => {
    const [accounts, setAccounts] = useState();
    const { loading, request } = useHttp();

    const { token } = useContext(AuthContext);

    const fetchAccounts = useCallback(async () => {
        try {
            const accountsList = await request('/api/account', 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setAccounts(accountsList);
        } catch (e) {

        }
    }, [token, request]);

    useEffect(() => {
        fetchAccounts()
    }, [fetchAccounts]);

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <>
            { !loading && accounts && 
                <div className='dashboard-overview__balances'>
                    <div className="dashboard-overview__balances-header d-flex justify-content-between align-items-center">
                        <div className="dashboard-overview__balances-title">
                            Balances
                        </div>
                        <div className="dashboard-overview__balances-period">
                            <i class="far fa-calendar"></i>
                            <select name="period" id="period">
                                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        {accounts.map(account => {
                            return (
                                <div className="col-12 col-lg-4" key={account._id}>
                                    <BalancesCard
                                        title={account.acountName}
                                        link={account._id}
                                        money={account.balance}
                                        currency={account.accountCurrency} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        </> 
        
    );
}

    

export default OverviewBalances;