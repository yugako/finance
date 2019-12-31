import React from 'react';

import './shortAccounts.scss'
import SingleAccount from './SingleAccount.js';
import OverviewTitle from "../components/OverviewTitle";

export default () => {
	return (
		<div className='accounts-overview mb-5'>
			<OverviewTitle
				title='Accounts'
				link='/accounts'
			/>
			
			<SingleAccount accountName='Wallet' lastUpdated='15.11.2019' amount='300' />
			<SingleAccount accountName='Cards' lastUpdated='13.11.2019' amount='1152' />
			
		</div>
	);
}