import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import HomeLogo from '../../home/logo';
import BottomBar from './bottom-bar';
import UserBar from './user-bar';
import Backdrop from '../../elements/Backdrop';
import './index.scss';


const Menu = [
    {
        exact: true,
        path: '/dashboard',
        icon: 'fas fa-th-large',
        label: 'Overview'
    },
    {
        exact: false,
        path: '/dashboard/accounts',
        icon: 'fas fa-wallet',
        label: 'Accounts'
    },
    {
        exact: false,
        path: '/dashboard/activity',
        icon: 'fas fa-chart-line',
        label: 'Activity'
    },
    {
        exact: false,
        path: 'fas fa-money-bill-alt',
        icon: 'fas fa-money-bill-alt',
        label: 'Budgets'
    },
    {
        exact: false,
        path: '/dashboard/settings',
        icon: 'fas fa-users-cog',
        label: 'Settings'
    },
]


const SideNav = () => {
    let [isOpen, setOpen] = useState(false);

    const toggleMenuHandler = () => {
        setOpen(isOpen = !isOpen);

    }
    return (
        <>
            {isOpen ? <Backdrop hideOnLargeScreen={true} clickHandler={toggleMenuHandler} /> : null }
            <aside className={`dashboard-sidebar ${isOpen ? 'open' : 'closed'}`}>
                
                <div className="dashboard-sidebar__header d-flex justify-content-between align-items-center">
                    <HomeLogo />
                    <i onClick={toggleMenuHandler} className={`toggle-menu fas ${isOpen ? 'fa-times': 'fa-bars'} `}></i>
                </div>
                <UserBar />
                <div className='dashboard-sidebar__content'>
                    <nav className="dashboard-nav">
                        {Menu.map((m, index) => {
                            return (
                                <NavLink onClick={toggleMenuHandler} key={index} exact={m.exact} to={m.path}>
                                    <i className={m.icon}></i>
                                    {m.label}
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>
                <BottomBar />
            </aside>
        </>
    );
}
 
export default SideNav;