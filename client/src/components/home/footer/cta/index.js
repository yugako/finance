import React from 'react';

import Button from '../../../elements/Button';

const FooterCTA = () => {
    return (
        <div className="home-footer__cta">
            <h4>
                Get started with the mobile app!
            </h4>
            <p>
                Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
            </p>
            <Button text='Get Started' />
        </div>
    );
}
 
export default FooterCTA;