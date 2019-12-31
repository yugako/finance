import React from 'react';
import {NavLink as Link} from 'react-router-dom';

import './shortBudgets.scss';
import SingleBudget from './SingleBudget.js';
export default () => {

	return (
		<div className='budgets-overview border-bottom mb-5'>
			<div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3'>
				<h4>Budgets</h4>
				<Link className="btn btn-sm btn-outline-secondary" to='/budgets'>Edit</Link>
			</div>
			
			<SingleBudget 
				budgetName='Eating' 
				startDate='01.02.2019' 
				endDate='28.02.2019'
				startBudget={0}
				endBudget={300}
				currentSpending={69} />

			<SingleBudget 
				budgetName='Entertainments' 
				startDate='01.02.2019' 
				endDate='28.02.2019'
				startBudget={0}
				endBudget={60}
				currentSpending={23} />

			<SingleBudget 
				budgetName='Transport' 
				startDate='01.02.2019' 
				endDate='28.02.2019'
				startBudget={0}
				endBudget={50} 
				currentSpending={29}/> 
		</div>
	);
}