import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import DashboardLogo from '../logo';
import HomeLogo from '../../home/logo';
import BottomBar from './bottom-bar';
import UserBar from './user-bar';
import './index.scss';

const SideNav = () => {
    let [isOpen, setOpen] = useState(true);

    const toggleMenuHandler = () => {
        setOpen(isOpen = !isOpen);
    }
    return (
        <aside className='dashboard-sidebar'>
            <div className="dashboard-sidebar__header d-flex justify-content-between align-items-center">
                <HomeLogo />
                <i onClick={toggleMenuHandler} className="toggle-menu fas fa-bars"></i>
            </div>
            <UserBar />
            <div className={`dashboard-sidebar__content ${isOpen ? 'open' : 'closed'}`}>
                <nav className="dashboard-nav">
                    <NavLink exact to='/dashboard'>
                        <i className="fas fa-th-large"></i>
                        Overview
                    </NavLink>
                    <NavLink to='/dashboard/accounts'>
                        <i className="fas fa-wallet"></i>
                        Accounts
                    </NavLink>
                    <NavLink to='/dashboard/activity'>
                        <i className="fas fa-chart-line"></i>
                        Activity
                    </NavLink>
                    <NavLink to='/dashboard/budgets'>
                        <i class="fas fa-money-bill-alt"></i>
                        Budgets
                    </NavLink>
                    <NavLink to='/dashboard/settings'>
                        <i className="fas fa-users-cog"></i>
                        Settings
                    </NavLink>
                </nav>
            </div>
            <BottomBar />
        </aside>
        
    );
}
 
export default SideNav;