import React from 'react';

import './shortBudgets.scss';
import OverviewTitle from "../components/OverviewTitle";
import SingleBudget from './SingleBudget.js';
export default () => {

	return (
		<div className='budgets-overview border-bottom mb-5'>
			<OverviewTitle
				title='Budgets'
				link='/budgets'
			/>
			
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