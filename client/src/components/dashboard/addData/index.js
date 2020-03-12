import React, {useContext, useState, useEffect, useCallback} from 'react';
import {NavLink} from 'react-router-dom';

import { useData } from '../../../hooks/data.hook';
import './index.scss';

const AddData = () => {
	const [accounts, setAccounts] = useState();
    const {fetchDataList} = useData();
    let [isOpen, setOpen] = useState(false);

    const toggleMenuHandler = () => {
        setOpen(isOpen = !isOpen);
    }

    const getAccounts = useCallback(async () => {
        const accountsList = await fetchDataList('account');

        setAccounts(accountsList);
    }, []);

    useEffect(() => {
       getAccounts();
    }, [getAccounts]);

	return (
		<div className="add-data">
			<i onClick={toggleMenuHandler} class="fas fa-plus-circle"></i>
	     
	        <ul className={`add-data__dropdown dropdown ${isOpen ? 'open' : 'closed'}`}>
	            <li>
	                <NavLink to="/dashboard/accounts/add">Add account</NavLink>
	            </li>

	            {accounts && accounts.length ?
	                <li>
	                    <NavLink to="/dashboard/activity/add">Add activity</NavLink>
	                </li> : null
	            }
	            
	        </ul>
	    </div>
	);
}

export default AddData;