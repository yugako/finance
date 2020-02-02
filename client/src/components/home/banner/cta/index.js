import React from 'react';

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
                           Manage your money easily.
                        </h1>
                        <p>
                            BeepB lets you take control of your complete ecommerce
                            warehouse and understand how you’re business is holding up.
                        </p>
                        <Button text='Get Started' />
                    </div>    
                </div>
            </div>    
        </div> 
    );
}
 
export default CTA;