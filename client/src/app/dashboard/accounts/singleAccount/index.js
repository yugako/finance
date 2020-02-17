import React, { useState, useCallback, useContext, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useHttp } from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';
import Loader from '../../../../components/elements/Loader';
import TopBar from '../../../../components/dashboard/top-bar';

const SingleAccount = () => {
    const {request, loading} = useHttp();
    const {token} = useContext(AuthContext);
    const [account , setAccount] = useState(null);
    const accountId = useParams().id;

    const getAccount = useCallback(async () => {
        try {
            const accountData = await request(`/api/account/${accountId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });

            setAccount(accountData);
        } catch (e) {
            
        }
    }, [token, accountId, request]);

    useEffect(() => {
        getAccount();
    }, [getAccount]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            {!loading && account && 
                <section>
                    <TopBar title={`Account: ${account.name}`} />
                     
                </section>
            }
        </>
        
    );
}
 
export default SingleAccount;