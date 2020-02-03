import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';


import Overview from './overview';
import SideNav from '../../components/dashboard/sidenav';
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <SideNav />
            <main class='dashboard-main'>
                <Switch>
                    <Route 
                        path="/dashboard" exact 
                        component={Overview}
                    />
                    <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
                </Switch>
            </main> 
        </div>
    );
}
 
export default Dashboard;