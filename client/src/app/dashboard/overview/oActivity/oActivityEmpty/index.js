import React, { useState, useCallback, useEffect } from 'react';

import {NavLink} from 'react-router-dom';

import { useData } from '../../../../../hooks/data.hook';

import './index.scss';

const ActivityEmpty = () => {
	const [accounts, setAccounts] = useState();
    const {fetchDataList} = useData();

    const getAccounts = useCallback(async () => {
        const accountsList = await fetchDataList('account');

        setAccounts(accountsList);
    }, [fetchDataList]);

    useEffect(() => {
        getAccounts()
    }, [getAccounts]);

	return (
		<div className='activity-empty'>
			You don't have any activity
			{accounts  
				? <NavLink to='/dashboard/activity/add'>Add new</NavLink> 
				: null
			}
		</div>
	);
}

export default ActivityEmpty;