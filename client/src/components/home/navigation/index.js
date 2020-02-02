import React from 'react';
import Button from '../../elements/Button';

const Menu = () => {
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
            <Button classes='home-menu__button signin' text='Sign In' />
        </nav>
    );
}

export default Menu;