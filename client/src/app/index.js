import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './home';


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
                    {/* <Route path="/about1" component={Dashboard}/>
                    <Route path="/about2" component={Dashboard}/> */}
                    <Redirect to={'/'}/>
                    <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default App;