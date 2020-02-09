import React from 'react';
import { BrowserRouter} from 'react-router-dom';


import { useAuth } from '../hooks/auth.hook';

import {AuthContext} from '../context/AuthContext';
import { useRoutes } from './router';

const App = () => {
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const router = useRoutes(isAuthenticated);

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
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
