import React from 'react';
import { BrowserRouter} from 'react-router-dom';


import { useAuth } from '../hooks/auth.hook';

import {AuthContext} from '../context/AuthContext';
import { APIContextProvider } from "../context/DataContext";

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
            <APIContextProvider>
                <BrowserRouter>
                    <div className='finance-app'>
                        {router}
                    </div> 
                </BrowserRouter>
            </APIContextProvider>
            
        </AuthContext.Provider>
        
    );
}
 
export default App;
