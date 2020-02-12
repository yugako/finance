import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../elements/Button';

const FooterCTA = () => {
    return (
        <div className="home-footer__cta">
            <h4>
                Ready to get started?
            </h4>
            <NavLink to='/register'>Try for free</NavLink>
        </div>
    );
}
 
export default FooterCTA;