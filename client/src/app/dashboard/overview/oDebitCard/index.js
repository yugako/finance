import React from 'react';
import {NavLink} from 'react-router-dom';
const OverwiewDebitCards = () => {
    return (
        <NavLink to='/dashboard/cards'>
            <div className='debits-overview'>
                <div className="debits-overview__title">
                    debit cards
                </div>
                
            </div>
        </NavLink>
    );
}
 
export default OverwiewDebitCards;