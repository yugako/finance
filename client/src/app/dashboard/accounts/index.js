import React, {useState, useEffect, useCallback} from 'react';

import { useData } from '../../../hooks/data.hook';

import AccountList from './accountList';

const Accounts = () => {
    const { fetchDataList } = useData();
	const [accounts, setAccounts] = useState();

    const getAccounts = useCallback(async () => {
    	try {
			const accounts = await fetchDataList('account');

    		setAccounts(accounts);
        } catch(e) {
			console.log(e);
        }
    }, []);

    useEffect(() => {
		getAccounts();
    }, [getAccounts]);

    return ( 
        <> 
            { accounts && <AccountList accounts={accounts} /> }
        </> 
    );
}
 
export default Accounts;