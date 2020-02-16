import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import DashboardLogo from '../logo';
import BottomBar from './bottom-bar';

const SideNav = () => {
    let [isOpen, setOpen] = useState(true);

    const toggleMenuHandler = () => {
        console.log('clicked');
        
        setOpen(isOpen = !isOpen);
    }
    return (
        <aside className='dashboard-sidebar'>
            <div className="dashboard-sidebar__header d-flex justify-content-between align-items-center">
                <DashboardLogo />
                <i onClick={toggleMenuHandler} class="toggle-menu fas fa-bars"></i>
            </div>
            <div className={`dashboard-sidebar__content ${isOpen ? 'open' : 'closed'}`}>
                <nav className="dashboard-nav">
                    <NavLink exact to='/dashboard'>
                        <i class="fas fa-th-large"></i>
                        Overview
                    </NavLink>
                    <NavLink to='/dashboard/accounts'>
                        <i class="fas fa-wallet"></i>
                        Accounts
                    </NavLink>
                    <NavLink to='/dashboard/activity'>
                        <i class="fas fa-chart-line"></i>
                        Activity
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