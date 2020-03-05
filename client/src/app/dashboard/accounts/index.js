import React, { useState, useContext, useCallback, useEffect } from 'react';

import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import { useData } from '../../../hooks/data.hook';
import Loader from '../../../components/elements/Loader';
import AccountList from './accountList';

const Accounts = () => {
    const [accounts, setAccounts] = useState();
    const {loading, request} = useHttp();
    const {fetchData} = useData();

     const [account, setAccount] = useState();
     const [activity, setActivity] = useState();

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
    
    const data = useCallback(async () => {
        const accountsList = await fetchData('account');
        const activityList = await fetchData('activity');

        setAccount(accountsList);
        setActivity(activityList);
    }, []);
   
    useEffect(() => {
        data();
        fetchAccounts()
    }, [fetchAccounts]);

    if(loading) {
        return (
            <Loader />
        )
    }

    return (
        
        <>  {console.log(account, activity)}
            { !loading && accounts && <AccountList accounts={accounts} /> }         
        </>
        
    );
}
 
export default Accounts;