import React from 'react';
import {NavLink} from 'react-router-dom';
import { useAPI } from '../../../../../context/DataContext';
import './index.scss';

const ActivityEmpty = () => {
	const { accounts } = useAPI();

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