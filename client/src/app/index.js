import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import { useAuth } from '../hooks/auth.hook';
import {AuthContext} from '../context/AuthContext';

import { useRoutes } from './router';
import Loader from '../components/elements/Loader';

const App = () => {
    const {token, login, logout, userId, ready} = useAuth();
    const isAuthenticated = !!token;
    const router = useRoutes(isAuthenticated);

    if(!ready) {
        return <Loader />
    }
    
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated, ready
        }}>
            <BrowserRouter>
                <div className='finance-app'>
                    {router}
                </div> 
            </BrowserRouter>
        </AuthContext.Provider>
        
    );
}
 
export default App;
