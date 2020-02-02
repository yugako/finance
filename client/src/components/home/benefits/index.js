import React from 'react';

import Benefit from './benefit';

const benefitData = [
    {
        icon: 'fas fa-shopping-cart',
        title: 'Detailed Order Information',
        text: 'Donec facilisis tortor ut augue lacinia, at viverra est semper.',
    },
    {
        icon: 'fas fa-chart-pie',
        title: 'Detailed Analytics',
        text: 'Donec facilisis tortor ut augue lacinia, at viverra est semper.',
    },
    {
        icon: 'fas fa-user',
        title: 'Buyer Information',
        text: 'Donec facilisis tortor ut augue lacinia, at viverra est semper.',
    },
    {
        icon: 'fas fa-brain',
        title: 'Intelligent Alerts',
        text: 'Donec facilisis tortor ut augue lacinia, at viverra est semper.',
    },
]

const HomeBenefits = () => {
    return (
        <section className='home-benefits' id='benefits'>
            <div className="container">
                <h2 className='home-benefits__title'>Try it and explore all benefits</h2>
                <div className="row">
                    {benefitData.map(benefit => {
                        return (       
                            <Benefit 
                                icon={benefit.icon} title={benefit.title} 
                                text={benefit.text} key={benefit.title} />
                        );
                    })}
                </div>
            </div>  
        </section>
    );
}
 
export default HomeBenefits;