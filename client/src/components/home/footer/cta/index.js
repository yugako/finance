import React from 'react';
import { NavLink } from 'react-router-dom';

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