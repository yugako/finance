import React from 'react';

import OverviewBalances from './oBalances';
import OverviewActivity from './oActivity';
import Headline from '../../../components/dashboard/headline';

const Overview = () => {
    return (
        <section className='dashboard-overview'>
            <Headline title={'Overview'} />
            <OverviewBalances />
            <div className="mt-5">
                <OverviewActivity />
            </div>
        </section>
       
    );
}
 
export default Overview;