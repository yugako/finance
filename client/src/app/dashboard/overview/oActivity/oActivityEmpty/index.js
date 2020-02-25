import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.scss';

const ActivityEmpty = () => {
	return (
		<div className='activity-empty'>
			You don't have any activity
			<NavLink to='/dashboard/activity/add'>Add new</NavLink>
		</div>
	);
}

export default ActivityEmpty;