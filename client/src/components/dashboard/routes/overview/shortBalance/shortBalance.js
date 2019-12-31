import React from 'react';

import './shortBalance.scss';

import BalanceTable from './BalanceTable.js'
import OverviewTitle from "../components/OverviewTitle";

export default () => {
	return (
		<div className='balance-overview border-bottom mb-5'>
			<OverviewTitle
				title='Balance'
				link='/balance'
			/>
			
			<BalanceTable caption='Today' incomes='450' spendings='210' />
			<BalanceTable caption='Yesterday' incomes='0' spendings='65' />
			
		</div>
	);
}