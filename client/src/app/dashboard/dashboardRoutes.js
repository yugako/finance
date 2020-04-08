import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import { TransitionGroup, CSSTransition } from "react-transition-group";
// Routes

import Overview from './overview';
import Activity from './activity';
import Accounts from './accounts';
import Budgets from './budgets';
import Settings from './settings';
import Help from './help';
import Welcome from './welcome';

/** Account */
import SingleAccount from './accounts/singleAccount';

const DashboardRoutes = () => {
    let location = useLocation();

	return (
		<main className='dashboard-main'>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={900} classNames="fade"
                >
        			<Switch location={location}>
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
                            path="/dashboard/budgets" exact 
                            component={Budgets}
                        />
                        <Route 
                            path="/dashboard/settings" exact 
                            component={Settings}
                        />
                        <Route 
                            path="/dashboard/help" exact 
                            component={Help}
                        />
                        <Route 
                            path="/dashboard/welcome" exact 
                            component={Welcome}
                        />
                
                        {/* Account routes */}
                        
                        <Route 
                            path="/dashboard/accounts/:id" exact 
                            component={SingleAccount}
                        />

                        {/* Activity routes */}


                        <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
		</main>
		
	);
}

export default DashboardRoutes;
