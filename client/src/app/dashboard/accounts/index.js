import React from 'react';

import { useAPI } from '../../../context/DataContext';

import AccountList from './accountList';

const Accounts = () => {
    const { accounts } = useAPI();

    return ( 
        <> 
            { accounts && <AccountList accounts={accounts} /> }
        </> 
    );
}
 
export default Accounts;