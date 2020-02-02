import React from 'react';

import Feature from './feature';

const featuresData = [
    {
        icon: require('../../../assets/images/shield.png'),
        title: 'Super Secured',
        text: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.',
    },
    {
        icon: require('../../../assets/images/bar-chart.png'),
        title: 'Detailed Analytics',
        text: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.',
    },
    {
        icon: require('../../../assets/images/box.png'),
        title: 'For daily usage',
        text: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.',
    },
]

const Features = () => {
    return (
        <section className='home-features' id='features'>
            <div className="container">
                <h2 className='home-features__title'>
                    Everything you’ll ever need.
                </h2>
                <div className="row">
                    {featuresData.map(feature => {
                        return (       
                            <Feature 
                                icon={feature.icon} title={feature.title} 
                                text={feature.text} key={feature.title} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
 
export default Features;