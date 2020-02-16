import React from 'react';

import OverviewBalances from './oBalances';
import OverviewActivity from './oActivity';
import TopBar from '../../../components/dashboard/top-bar';

const Overview = () => {
    return (
        <section className='dashboard-overview'>
            <TopBar title={'Overview'} />
            <OverviewBalances />
            <div className="mt-5">
                <OverviewActivity />
            </div>
        </section>
       
    );
}
 
export default Overview;