import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './home';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='finance-app'>
                <Switch>
                    <Route 
                        path="/" exact 
                        component={Home}
                    />
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default App;