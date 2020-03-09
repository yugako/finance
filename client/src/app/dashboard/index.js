import React from 'react';
import DashboardRoutes from './dashboardRoutes';
import SideNav from '../../components/dashboard/sidenav';

import './index.scss';
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <SideNav />
            <DashboardRoutes /> 
        </div>
    );
}
 
export default Dashboard;