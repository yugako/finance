import React  from "react";

import Menu from '../navigation';
import Logo from '../logo';
import CTA from './cta';

import './index.scss';

const HomeBanner = () => {
    return (
        <header className='home-header'>
            <div className="container">
                <div className="row justify-content-center justify-content-sm-between align-items-center pl-3 pr-3">
                    <Logo />
                    <Menu />
                </div>
                <CTA />
            </div>
        </header>
    );
}

export default HomeBanner;