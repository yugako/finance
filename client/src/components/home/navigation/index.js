import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../../elements/Button';

import { useAuth } from '../../../hooks/auth.hook';

import './index.scss';


const Menu = () => {
    const {token} = useAuth();
    const isAuthenticated = !!token;

    return (
        <nav className='home-menu'>
            <ul className='home-menu__list'>
                <li className='home-menu__item'>
                    <a className='home-menu__link' href="#features">Features</a>
                </li>
                <li className='home-menu__item'>
                    <a className='home-menu__link' href="#benefits">Benefits</a>
                </li>
            </ul>
            {isAuthenticated
                ? <NavLink to='/dashboard'>
                      <Button classes='home-menu__button signin' text='Go to dashboard' />
                  </NavLink>
                : <NavLink to='/register'>
                      <Button classes='home-menu__button signin' text='Sign In' />
                  </NavLink>
            }
            
            
        </nav>
    );
}

export default Menu;