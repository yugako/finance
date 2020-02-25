import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.scss';
const AccountPlaceholder = () => {
	return (
		<div className="col-12 col-lg-4">
			<div className='account-placeholder'>
				<NavLink to='/dashboard/accounts/add'>
					Add Account
				</NavLink>
			</div>	
		</div>
		
	);
}

export default AccountPlaceholder;