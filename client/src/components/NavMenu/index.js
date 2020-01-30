import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.scss';

const NavMenu = () => {
    return (
        <React.Fragment>
            <nav className='nav'>
                <div className="nav-wrapper indigo darken-1">
                    <NavLink to="/" className="brand-logo">Logo</NavLink>
                    <a href="#" data-target="mobile-menu" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/about1">Sass</NavLink></li>
                        <li><NavLink to="/about2">Components</NavLink></li>
                        <li>
                            <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

                            <ul id='dropdown1' class='dropdown-content'>
                                <li><a href="#!">one</a></li>
                                <li><a href="#!">two</a></li>
                                <li class="divider" tabindex="-1"></li>
                                <li><a href="#!">three</a></li>
                                <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                                <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-menu">
                

                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="images/office.jpg" />
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                        <a href="#name"><span className="name">John Doe</span></a>
                        <a href="#email"><span className="email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><NavLink to="/about1">Sass</NavLink></li>
                <li><NavLink to="/about2">Components</NavLink></li>
            </ul>
        </React.Fragment>
        
    );
}

export default NavMenu;