
import React, { useState, useCallback, useEffect } from 'react';
import Loader from '../../../components/elements/Loader';
import AccountList from './accountList';

import { useData } from '../../../hooks/data.hook';

const Accounts = () => {
    const [accounts, setAccounts] = useState();
    const {fetchDataList, fetchDataSingle} = useData();

    const getAccounts = useCallback(async () => {
        const accountsList = await fetchDataList('account');

        setAccounts(accountsList);
    }, []);


    useEffect(() => {
        getAccounts();
    }, [getAccounts]);

    if(!accounts) {
        return (
            <Loader />
        )
    }

    return (
        <AccountList accounts={accounts} />
    );
}
 
export default Accounts;