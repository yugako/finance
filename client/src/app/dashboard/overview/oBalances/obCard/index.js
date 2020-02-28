import React from 'react';
import { NavLink } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, } from 'recharts';

import './index.scss';

const BalancesCard = ({title, link, money, currency, datas}) => {
    return (
        <div className='balances-card'>
            <div className="balances-card__main">
                <div className="balances-card__header d-flex justify-content-between align-items-center">
                    <div className="balances-card__title">
                        <NavLink to={`/dashboard/accounts/${link}`}>{title}</NavLink>
                    </div>
                    <div className="balances-card__options">
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div className="balances-card__content d-flex justify-content-between align-items-center">
                    <h2 className="balances-card__money">
                        {money}
                        
                        <span className='currency'>
                            {currency}
                        </span>
                    </h2>
                    <div className="balances-card__progress">
                       <div className="balances-card__progress-percent">
                           +40%
                        </div>
                       <div className="balances-card__progress-period">
                            this week
                        </div> 
                    </div>
                </div>
            </div>
            <div className="balances-card__chart">
                <ResponsiveContainer width="100%" height={70}>
                    <AreaChart
                      data={datas}
                      margin={{
                        top: 5, right: 0, left: 0, bottom: 0,
                      }}
                    >
                    <Area type="monotone" dataKey="currentBalance" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            

        </div> 
    );
}
 
export default BalancesCard;