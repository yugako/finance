import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Routes

import Overview from './overview';
import Activity from './activity';
import Accounts from './accounts';
import History from './history';
import Settings from './settings';
import Help from './help';

/** Account */
import AddAccount from './accounts/addAccount';
import SingleAccount from './accounts/singleAccount';

/** Activity */
import AddActivity from './activity/addActivity';


const DashboardRoutes = () => {
	return (
		<main className='dashboard-main'>
			<Switch>
                {/*
                    Main routes
                */}
                <Route 
                    path="/dashboard" exact 
                    component={Overview}
                />
                <Route 
                    path="/dashboard/activity" exact 
                    component={Activity}
                />
                <Route 
                    path="/dashboard/accounts" exact 
                    component={Accounts}
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
                {/* Account routes */}
                <Route 
                    path="/dashboard/accounts/add" exact 
                    component={AddAccount}
                />
                <Route 
                    path="/dashboard/accounts/:id" exact 
                    component={SingleAccount}
                />

                {/* Activity routes */}
                <Route 
                    path="/dashboard/activity/add" exact 
                    component={AddActivity}
                />

                <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
            </Switch>
		</main>
		
	);
}

export default DashboardRoutes;
