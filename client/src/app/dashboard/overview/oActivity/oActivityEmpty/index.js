import React, {useState, useEffect, useCallback} from 'react';
import {NavLink} from 'react-router-dom';
import { useData } from '../../../../../hooks/data.hook';
import './index.scss';

const ActivityEmpty = () => {
	const { fetchDataList } = useData();
	const [accounts, setAccounts] = useState();

	const getAccounts = useCallback(async () => {
		try {
			const accounts = await fetchDataList('account');

			setAccounts(accounts);
		} catch(e) {
			console.log(e);
		}
	});

	useEffect(() => {
		getAccounts();
	}, [getAccounts]);

	return (
		<div className='activity-empty'>
			You don't have any activity
			{accounts && accounts.length 
				? <NavLink to='/dashboard/activity/add'>Add new</NavLink> 
				: null
			}
		</div>
	);
}

export default ActivityEmpty;