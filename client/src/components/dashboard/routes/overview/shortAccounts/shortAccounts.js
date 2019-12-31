import React from 'react';
import {NavLink as Link} from 'react-router-dom';

import './shortAccounts.scss'
import SingleAccount from './SingleAccount.js';

export default () => {
	return (
		<div className='accounts-overview mb-5'>
			<div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3'>
				<h4 className='accounts-overview__title'>Accounts</h4>
				<Link className="btn btn-sm btn-outline-secondary" to='/accounts'>Edit</Link>
			</div>
			
			<SingleAccount accountName='Wallet' lastUpdated='15.11.2019' amount='300' />
			<SingleAccount accountName='Cards' lastUpdated='13.11.2019' amount='1152' />
			
		</div>
	);
}