import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './home';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return(
            <Switch>
                <Route 
                    path="/" exact 
                    component={Home}
                />
                <Route path="/dashboard" component={Dashboard} />
                <Redirect to='/dashboard' />
            </Switch>
        );
        
    } else {
        return (
            <Switch>
                <Route 
                    path="/" exact 
                    component={Home}
                />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Redirect to='/' />
            </Switch>
        );
    }
    
}
