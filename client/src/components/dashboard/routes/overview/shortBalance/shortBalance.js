import React from 'react';
import {NavLink as Link} from 'react-router-dom';

import './shortBalance.scss';

import BalanceTable from './BalanceTable.js'

export default () => {
	return (
		<div className='balance-overview border-bottom mb-5'>
			<div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center'>
				<h4>Balance</h4>
				<Link className="btn btn-sm btn-outline-secondary" to='/balance'>Edit</Link>
			</div>
			
			<BalanceTable caption='Today' incomes='450' spendings='210' />
			<BalanceTable caption='Yesterday' incomes='0' spendings='65' />
			
		</div>
	);
}