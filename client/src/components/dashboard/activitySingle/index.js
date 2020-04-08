import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Popup from '../../elements/Popup';
import Backdrop from '../../elements/Backdrop';
import EditActivity from '../../../app/dashboard/activity/editActivity';

import './index.scss';


const ActivitySingle = ({activityID, title, date, amount, account, icon, activityType }) => {
    let [isPopupOpen, setPopupOpen] = useState(false);
    
    const togglePopupHandler = () => setPopupOpen(isPopupOpen = !isPopupOpen);
    return (
        <>
            <div className='activity d-flex align-items-center'>
                <div className="activity-content d-flex justify-content-start flex-wrap align-items-center">
                    <div className="activity-content__icon">
                        <img src={icon} alt={title}/>
                    </div>
                    <div className="activity-content__data d-flex justify-content-between flex-wrap align-items-center">
                        <div className="activity-content__info">
                            <div onClick={togglePopupHandler} className="activity-content__title">
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
            {isPopupOpen 
				? 	
					<>
						<Popup open={isPopupOpen}>
							<EditActivity  
                                id={activityID}
                                title={title} 
                                date={date}
                                amount={amount}
                                account={account}
                                icon={icon}
                                type={activityType}

                            />
						</Popup>
						<Backdrop clickHandler={togglePopupHandler} />
					</>
				:
					null
			}
        </>
        
    );
}

ActivitySingle.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    amount: PropTypes.string,
    account: PropTypes.string
}
 
export default ActivitySingle;