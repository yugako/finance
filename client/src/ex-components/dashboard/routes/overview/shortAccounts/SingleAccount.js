import React from 'react';

export default ({accountName, lastUpdated, amount}) => {
	return (
		<div className='accounts-overview__account border p-3 mb-2 bg-dark text-light'>
			<div className='accounts-overview__account-title'>
				<h5>{accountName}</h5>
				<small className='small lead'>Last update: {lastUpdated}</small>
			</div>
			<div className='accounts-overview__account-amount text-success'>
				<span className='font-weight-bold'>{amount}$</span>
			</div>
		</div>
	);
}