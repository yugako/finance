import React from 'react';

import FooterCTA from './cta';
import FooterCopyright from './copyright';
import Logo from '../logo';

import './index.scss';

const HomeFooter = () => {
    return (
        <footer className='home-footer'>
            <FooterCTA />

            <div className="home-footer__logo">
                <Logo />
            </div>
           <FooterCopyright />
        </footer>
    );
}
 
export default HomeFooter;