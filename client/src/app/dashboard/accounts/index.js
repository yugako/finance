import React, { useState, useContext, useCallback, useEffect } from 'react';

import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import Loader from '../../../components/elements/Loader';
import AccountList from './accountList';

const Accounts = () => {
    const [accounts, setAccounts] = useState();
    const {loading, request} = useHttp();

    const {token} = useContext(AuthContext);

    const fetchAccounts = useCallback(async () => {
        try {
            const accountsList = await request('/api/account', 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setAccounts(accountsList);
        } catch (e) {
            
        }
    }, [token, request]);

    useEffect(() => {
        fetchAccounts()
    }, [fetchAccounts]);

    if(loading) {
        return (
            <Loader />
        )
    }

    return (
        <>  
            { !loading && accounts && <AccountList accounts={accounts} /> }         
        </>
        
    );
}
 
export default Accounts;