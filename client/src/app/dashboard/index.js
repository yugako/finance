import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';

// Routes

import Overview from './overview';
import Activity from './activity';
import Balances from './balances';
import Debits from './debits';
import History from './history';
import Settings from './settings';
import Help from './help';

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
                    <Route 
                        path="/dashboard/activity" exact 
                        component={Activity}
                    />
                    <Route 
                        path="/dashboard/balances" exact 
                        component={Balances}
                    />
                    <Route 
                        path="/dashboard/cards" exact 
                        component={Debits}
                    />
                    <Route 
                        path="/dashboard/history" exact 
                        component={History}
                    />
                    <Route 
                        path="/dashboard/settings" exact 
                        component={Settings}
                    />
                    <Route 
                        path="/dashboard/help" exact 
                        component={Help}
                    />
                    <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
                </Switch>
            </main> 
        </div>
    );
}
 
export default Dashboard;