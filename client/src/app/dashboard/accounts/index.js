import React, { useState, useContext, useCallback, useEffect } from 'react';
import TopBar from '../../../components/dashboard/top-bar'; 
import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import Loader from '../../../components/elements/Loader';


const Balances = () => {
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
            {!loading && accounts &&
                <div>
                    <TopBar title='Accounts' />
                    {console.log(accounts)}
                    {
                        accounts.map(account => {
                            return (
                                <p key={account.name}>{account.name}</p>
                            );
                        })
                    }
                   
                </div>
            }
            
        </>
        
    );
}
 
export default Balances;