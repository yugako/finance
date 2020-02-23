import React from 'react';

import Benefit from './benefit';

import Wallet from '../../../assets/images/wallet.svg';
import PersonalFinance from '../../../assets/images/personal_finance.svg';
import Finance from '../../../assets/images/finance.svg';
import Online from '../../../assets/images/online_transactions.svg';

import './index.scss';

const benefitData = [
    {
        icon: Wallet,
        title: 'Be involved in your financial decisions',
        text: 'Automated finance tools are great, except when they aren’t. We provide you with tools that are quick to use, but ultimately you are in control. We help you learn, instead of dictating.',
        reverse: false,
    },
    {
        icon: PersonalFinance,
        title: 'Everything in one place',
        text: 'Add all of your accounts and track everything in one place. Get valuable information like net worth from all your accounts together.',
        reverse: true,
    },
    {
        icon: Finance,
        title: 'Oh my, the reports',
        text: 'Intuitive reports give you a quick way to learn about your finances. By default, we include net worth and cash flow reports, but soon you’ll be able to create any report that you like. You’ll even be able to download custom reports from others.',
        reverse: false,
    },
    {
        icon: Online,
        title: 'The fastest way to manage transactions',
        text: 'Breeze through your transactions and update them easily with a streamlined, minimal interface. Categorizing your transactions correctly is important and we’ve optimized this process. Manage split transactions and transfers all in the same editor.',
        reverse: true,
    },
]

const HomeBenefits = () => {
    return (
        <section className='home-benefits' id='benefits'>
            <div className="container">
                <div className="row">
                    {benefitData.map(benefit => {
                        return (       
                            <Benefit 
                                icon={benefit.icon} title={benefit.title} 
                                text={benefit.text} key={benefit.title} reverse={benefit.reverse} />
                        );
                    })}
                </div>
            </div>  
        </section>
    );
}
 
export default HomeBenefits;