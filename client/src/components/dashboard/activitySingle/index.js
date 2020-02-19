import React from 'react';

const ActivitySingle = ({icon, title, date, amount, currency, account}) => {
    return (
        <div className='activity d-flex align-items-center'>
           
           <div className="activity-content d-flex justify-content-start flex-wrap justify-content-sm-between align-items-center">
                <div className="activity-content__info">
                    <div className="activity-content__title">
                        {title}
                    </div>
                    <div className="activity-content__date">
                        {date}
                    </div>
                </div>
                <div className="activity-content__spendings">
                    <div className={`activity-content__amount ${+amount > 0 ? 'green' : 'red'}`}>
                        {amount}
                        <span className='currency'>UAH</span>
                    </div>
                    <div className='activity-content__account'>{account}</div>
                </div>
           </div>
        </div>
    );
}
 
export default ActivitySingle;