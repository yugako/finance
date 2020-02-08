import React from 'react';
import {NavLink} from 'react-router-dom';
const OverwiewDebitCards = () => {
    return (
        <NavLink to='/dashboard/cards'>
            <div className='debits-overview'>
                <div className="debits-overview__title">
                    debit cards
                </div>
                <div className="debits-overview__img">
                    <img src={require('../../../../assets/images/visa.png')} alt=""/>
                </div>
            </div>
        </NavLink>
    );
}
 
export default OverwiewDebitCards;