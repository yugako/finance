import React from 'react';

import ShortBalance from './overview/shortBalance/shortBalance.js'
import ShortAccounts from './overview/shortAccounts/shortAccounts.js'
import ShortBudgets from './overview/shortBudgets/shortBudgets.js'
import ShortIncome from './overview/shortIncome/shortIncome.js'
import ShortCosts from './overview/shortCosts/shortCosts.js'

const Overview = () => {
	return (
		<main className='pt-3 pb-2'>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center  border-bottom mb-3">
            <h1 className="h2">Overview</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>

          <ShortBalance />
          <ShortAccounts />
          <ShortBudgets />
          <ShortIncome />
          <ShortCosts />
    </main>
	);	
}

export default Overview;
