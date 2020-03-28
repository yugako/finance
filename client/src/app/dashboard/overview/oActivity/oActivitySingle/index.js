import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const ActivitySingle = ({title, date, amount, account}) => {
    return (
        <div className='activity d-flex align-items-center'>
           <div className="activity-content d-flex justify-content-start flex-wrap align-items-center">
                <div className="activity-content__icon">
                    <img src={require('../../../../../assets/images/icons/grocery-bag.png')} alt=""/>
                </div>
                <div className="activity-content__data d-flex justify-content-start flex-wrap justify-content-sm-between align-items-center">
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
        </div>
    );
}

ActivitySingle.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    amount: PropTypes.string,
    account: PropTypes.string
}
 
export default ActivitySingle;