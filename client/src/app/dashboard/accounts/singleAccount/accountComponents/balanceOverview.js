import React from 'react';

import AccountTrend from './graphs/trend';
import AccountPie from './graphs/pie';

const options = [
    { value: 'default', label: 'Choose period', disabled: true, selected: true },
    { value: 'full', label: 'All time' },
    { value: 'day', label: 'Current Day' },
    { value: 'week', label: 'Current Week' },
    { value: 'month', label: 'Current Month' },
    
];

const BalanceOverview = ({plotData, pieData, isData, progress, label, currency, changeHandler}) => {
    return (
        <>
            <div className="account-period">
                <div className="account-period__title">
                    <h4>Note:</h4>

                    Would you like to see some trends <span>about your spendings?</span> Then click on the dropdown below and recognize how much did you spend for different needs.
                    <span>First graph</span> will show for you balance trend which is specific for some period of time. <span>Second</span> will show for you how much did you spend for specific type of activities. 
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        {isData
                            ? 
                                <div className="account-period__bar d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="account-period__dropdown">
                                        <i className="far fa-calendar"></i>
                                        <select onChange={changeHandler} defaultValue={options[0].value} className='account-period__select' name="period" id="period">
                                            {options.map(option => <option disabled={option.disabled ? true : false} key={option.value} value={option.value}>{option.label}
                                            </option>)}
                                        </select>
                                    </div>
                                
                                    {progress && 
                                        <div className='account-balance__progress'>
                                            <span className={parseFloat(progress) < 0 ? 'negative': '' }>{progress}</span>&nbsp;
                                            {label}
                                        </div>
                                    }
                                </div>
                            : <div>Seems you don't have data to display. Try to add a few activities.</div>

                        }
                    </div>
                </div>
                    
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                
                    {plotData && <AccountTrend data={plotData} />}
                    
                </div>
                <div className="col-12 col-lg-6 align-self-center">
                    <AccountPie currency={currency} data={pieData} />
                </div>
            </div>
        </>
    );
}
 
export default BalanceOverview;