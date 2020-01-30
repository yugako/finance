import React from 'react';
import {BrowserRouter as Router, Route, NavLink as Link, Switch} from 'react-router-dom';

import './AppView.scss'
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



export default class AppView extends React.Component{
	state = {
		menuOpen: false
	}

	toggleMenu = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}
	render() {
		const {menuOpen} = this.state;
		return (
			<div className={`app-view ${menuOpen ? 'sidebar-active' : ''}`}>
				<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
					<div className="container-fluid">
						<div className="row w-100 justify-content-between align-items-center">
							<div className="col-4 col-md-4 d-flex justify-content-between align-items-center">
								<a className="nav-link" href="#">Finance</a>
								<i onClick={this.toggleMenu} className='fas fa-bars menu-toggler text-white'></i>
							</div>
						
		
							<div className="col-4 col-md-2 text-right">
								<ul className="navbar-nav px-3">
									<li className="nav-item text-nowrap">
										<a className="nav-link" href="#">Sign out</a>	
									</li>
								</ul>
							</div>
						</div>
					</div>
					
				</nav>
	
				<div className='container-fluid'>
					<div className='row'>
						<Router>
							<nav className={`col-12 col-md-4 col-lg-2 bg-light sidebar ${menuOpen ? 'active' : ''}`}>
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
							<div className='col-12 ml-sm-auto col-lg-10 pt-5'>
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
			</div>	 
		);	
	}
	
}
