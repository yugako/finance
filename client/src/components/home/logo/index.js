import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.scss';

const Logo = () => {
    return (
        <NavLink to='/' className='logo'>
            money
            <span>.on</span>
        </NavLink>
    );
}
 
export default Logo;