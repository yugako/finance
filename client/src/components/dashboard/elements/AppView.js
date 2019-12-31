import React from 'react';
import {BrowserRouter as Router, Route, NavLink as Link, Switch} from 'react-router-dom';

// Finance management
import Overview from '../routes/Overview';
import Balance from '../routes/Balance';
import Income from '../routes/Income';
import Costs from '../routes/Costs';
import Accounts from '../routes/Accounts';
import Budgets from '../routes/Budgets';

// User settings
import Settings from '../routes/Settings';

// 404 page 
import NoMatch from '../routes/NoMatch';

const routes = [
	{
		icon: 'fab fa-houzz',
		title: 'Overview',
		link: '/overview',
		component: Overview,
	},
	{
		icon: 'fas fa-coins',
		title: 'Balance',
		link: '/balance',
		component: Balance,
	},
	{
		icon: 'fas fa-hand-holding-usd',
		title: 'Income',
		link: '/income',
		component: Income,
	},
	{
		icon: 'fas fa-shopping-cart',
		title: 'Costs',
		link: '/costs',
		component: Costs,
	},
	{
		icon: 'fas fa-credit-card',
		title: 'Accounts',
		link: '/accounts',
		component: Accounts,
	},
	{
		icon: 'fas fa-wallet',
		title: 'Budgets',
		link: '/budgets',
		component: Budgets,
	},
	{
		icon: 'fas fa-user-cog',
		title: 'Settings',
		link: '/settings',
		component: Settings,
	},
];

export default () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
		      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Finance</a>

		      <ul className="navbar-nav px-3">
		        <li className="nav-item text-nowrap">
		          <a className="nav-link" href="#">Sign out</a>
		        </li>
		      </ul>
		    </nav>

		    <div className='container-fluid'>
		    	<div className='row'>
		    		<Router>
		                <nav className="col-md-2 bg-light sidebar">
	    		          	<div className="sidebar-sticky">
	    		            	<ul className="nav flex-column">
	    			            	{routes.map((route) => {
	    			            		return (
	    			            			<li className="nav-item" key={route.title}>
	    			            				<i className={route.icon}></i>
	    			            			  	<Link className='nav-link' to={route.link}>{route.title}</Link>
	    			            			</li>
	    			            		);
	    			            	})}
	    		            	</ul>
	    		          	</div>
	    		        </nav>
	    		        <div role="main" className='col-md-9 ml-sm-auto col-lg-10 px-4'>
	    		        	<Switch>
	    		        		{routes.map(route => {
	    		        			return (
	    		        				<Route key={route.title} path={route.link} component={route.component} />
	    		        			);
	    		        		})}
		    		          <Route path='*' component={NoMatch} />			      
		    		        </Switch>
	    		        </div>
	                   	
		            </Router>
		    	</div>
		    </div>
		</React.Fragment>
		
		 
	);	
}
