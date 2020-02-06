import React from 'react';
import {NavLink} from 'react-router-dom';

import DashboardLogo from '../logo';
import BottomBar from './bottom-bar';

const SideNav = () => {
    return (
        <aside className='dashboard-sidebar'>
            <div className="dashboard-sidebar__header d-flex justify-content-between align-items-center">
                <DashboardLogo />
                <i class="toggle-menu fas fa-bars"></i>
            </div>
            <div className="dashboard-sidebar__content">
                <nav className="dashboard-nav">
                    <NavLink to='/dashboard'>
                        <i class="fas fa-th-large"></i>
                        Overview
                    </NavLink>
                    <NavLink to='/dashboard/activity'>
                        <i class="fas fa-chart-line"></i>
                        Activity
                    </NavLink>
                    <NavLink to='/dashboard/balances'>
                        <i class="fas fa-wallet"></i>
                        Balances
                    </NavLink>
                    <NavLink to='/dashboard/cards'>
                        <i class="far fa-credit-card"></i>
                        Debit Cards
                    </NavLink>
                    <NavLink to='/dashboard/history'>
                        <i class="fas fa-history"></i>
                        History
                    </NavLink>
                    <NavLink to='/dashboard/settings'>
                        <i class="fas fa-users-cog"></i>
                        Settings
                    </NavLink>
                </nav>
            </div>
            
            
            <BottomBar />
        </aside>
        
    );
}
 
export default SideNav;