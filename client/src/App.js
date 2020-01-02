 
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink as Link} from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard.js';
import SignIn from './components/auth/SignIn.js';

const login = true;
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid">
                {login 
                    ? <Dashboard />
                    : <SignIn />
                }
            </div>
        );
    }
}

export default App;