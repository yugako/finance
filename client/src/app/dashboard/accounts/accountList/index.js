import React from 'react';
import { NavLink } from 'react-router-dom';
import TopBar from '../../../../components/dashboard/top-bar';

const AccountList = ({accounts}) => {
    return (
        <section className='dashboard-accounts'>
            <TopBar title='Accounts' />
            <div className="dashboard-accounts__list row">
                {
                    accounts.map(account => {
                        return (
                            <div className='col-12 col-lg-6' key={account._id}>
                                <div className='dashboard-accounts__item' >
                                    <NavLink to={`/dashboard/accounts/${account._id}`}>
                                        <h5 className='dashboard-accounts__item-title'>
                                            {account.acountName}
                                        </h5>
                                    </NavLink>
                                </div>
                            </div>
                            
                        );
                    })
                }
            </div>
        </section>
    );
}
 
export default AccountList;