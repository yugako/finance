import React from 'react';
import {NavLink} from 'react-router-dom';

import Button from '../../../elements/Button';

const CTA = () => {
    return ( 
        <div className="home-header__cta">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <div className="home-header__cta-image">
                        <img src={require('../../../../assets/images/app-preview.jpg')} alt=""/>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="home-header__cta-text">
                        <h1>
                        Track your money, save money.
                        </h1>
                        <p>
                            It's that simple. Welcome to the easiest tool to see how many chicken sandwiches you bought.
                        </p>
                        <NavLink to='/register'>
                            <Button text='Get Started' />
                        </NavLink>
                        
                    </div>    
                </div>
            </div>    
        </div> 
    );
}
 
export default CTA;