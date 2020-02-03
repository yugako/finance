import React from 'react';
import {NavLink} from 'react-router-dom';

import Logo from '../../home/logo';

const SideNav = () => {
    return (
        <aside className='dashboard-sidebar'>
            <Logo />
            <nav className="dashboard-nav">
                <NavLink to='/dashboard'>
                    Overview
                </NavLink>
                <NavLink to='/dashboard/activity'>
                    Activity
                </NavLink>
                <NavLink to='/dashboard/balances'>
                    Balances
                </NavLink>
                <NavLink to='/dashboard/cards'>
                    Debit Cards
                </NavLink>
                <NavLink to='/dashboard/history'>
                    History
                </NavLink>
                <NavLink to='/dashboard/settings'>
                    Settings
                </NavLink>
            </nav>
        </aside>
        
    );
}
 
export default SideNav;