import React from 'react';

import './SingleCost.scss';
import OverviewTitle from "../components/OverviewTitle";
import SingleCost from "./SingleCost";

export default () => {
    return(
        <div className='cost-overview mb-5'>
            <OverviewTitle
                title='Costs'
                link='/costs'
            />

            <SingleCost
                title={'Finance costs'}
                amount={'750'}
                source={'Wallet'}
                date={'12.02.19'}
                icon='fas fa-university'
            />
            <SingleCost
                title={'Other'}
                amount={'5302'}
                source={'Wallet'}
                date={'09.02.19'}
                icon={'fas fa-money-bill-wave'}
            />
            <SingleCost
                title={'One job'}
                amount={'3000'}
                source={'Wallet'}
                date={'50000'}
                icon={'fas fa-wallet'}
            />
            <SingleCost
                title={'Salary'}
                amount={'12000'}
                source={'Wallet'}
                date={'27.01.19'}
                icon={'fas fa-money-check-alt'}
            />
        </div>
    );
}