import React from 'react';
import DashboardRoutes from './dashboardRoutes';
import SideNav from '../../components/dashboard/sidenav';
import AddData from '../../components/dashboard/addData';

import './index.scss';
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <SideNav />
            <DashboardRoutes />
			<AddData />
        </div>
    );
}
 
export default Dashboard;