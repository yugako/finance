import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Dashboard from '../Routes/Dashboard';

const About1 = () => <h1>About!</h1>;
const About2 = () => <h1>About1</h1>;

const AppView = props => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/about1" component={About1}/>
                <Route path="/about2" component={About2}/>
                <Redirect to={'/'}/>
                {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />*/}
            </Switch>
        </>
    );
}

export default AppView;