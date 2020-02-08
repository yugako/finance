import React from 'react';
import BalancesCard from './obCard';

const options = [
    { value: 'current_week', label: 'Current Week' },
    { value: 'current_month', label: 'Current Month' },
    { value: 'current_quater', label: 'Current Quater' }
];

const OverviewBalances = () => {
    return (
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
                <div className="col-12 col-lg-4">
                    <BalancesCard 
                        title='RO73 BUCU 0623 0545 0883 EUR' 
                        money='2,560.50'
                        currency='EUR' />
                </div>
                <div className="col-12 col-lg-4">
                    <BalancesCard 
                        title='RO73 BUCU 0623 0545 0883 EUR' 
                        money='2,560.50'
                        currency='EUR' />
                </div>
                <div className="col-12 col-lg-4">
                    <BalancesCard 
                        title='RO73 BUCU 0623 0545 0883 EUR' 
                        money='2,560.50'
                        currency='EUR' />
                </div>
            </div>
        </div>
    );
}
 
export default OverviewBalances;