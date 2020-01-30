 import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

import NavMenu from './components/NavMenu';
import AppView from './views/AppView';


class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        return (
            <div className='finance-app blue-grey lighten-5'>
                <div className='finance-app__nav'>
                    <NavMenu />
                </div>
          
                <div className='finance-app__view'>
                    <AppView />
                </div>
            </div>
        );
    }
}

export default App;