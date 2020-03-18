import React from 'react';
import {NavLink} from 'react-router-dom';

const AccountActions = () => {
    return ( 
        <div className="account-actions">
            <NavLink to='/dashboard/accounts/add'>
                Add new
            </NavLink>
            <NavLink className='edit' to='/dashboard/accounts/edit'>
                Edit
            </NavLink>
            <NavLink className='remove' to='/dashboard/accounts/remove'>
                Remove
            </NavLink>
        </div>
    );
}
 
export default AccountActions;