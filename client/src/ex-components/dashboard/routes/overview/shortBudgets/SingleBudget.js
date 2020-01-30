import React from 'react';

export default ({budgetName, startDate, endDate, startBudget, endBudget, currentSpending}) => {
	const progress = Math.floor((currentSpending / endBudget) * 100) ;
	return (
		<div className='budgets-overview__item border p-3 rounded bg-warning text-dark mb-2'>
			<h6 className='budgets-overview__item-title'>{budgetName}</h6>
			<div className='d-flex align-items-center'>
				<i className="fas fa-utensils"></i>
				<div className='budgets-overview__item-content'>
					<div className='budgets-overview__item-dates d-flex justify-content-between mb-1'>
						<span className='start-date'>{startDate}</span>
						<span className='current-progress'>{progress}%</span>
						<span className='end-date'>{endDate}</span>
					</div>
					<div className="progress">
					  	<div 
					  		className="progress-bar" 
					  		role="progressbar" 
					  		style={{width: progress + '%'}} 
					  		aria-valuenow={progress} 
					  		aria-valuemin="0" 
					  		aria-valuemax="100"
					  	>
					  		
						</div>
					</div>
					<div className='budgets-overview__item-amount d-flex justify-content-between mt-1'>
						<span className='start-budget'>{startBudget}$</span>
						<span className='current-spending'>{currentSpending}$</span>
						<span className='end-budget'>{endBudget}$</span>
					</div>
				</div>
			</div>
		</div>
	);
}