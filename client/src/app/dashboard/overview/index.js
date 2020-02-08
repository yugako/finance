import React from 'react';

import TopBar from '../../../components/dashboard/top-bar'; 
import OverviewBalances from './oBalances';
import OverviewDebitCards from './oDebitCard';
import OverviewActivity from './oActivity';

const Overview = () => {
    return (
        <section className='dashboard-overview'>
            <TopBar title='Overview' />
            <OverviewBalances />
            <div className="row mt-5">
                <div className="col-12 col-lg-4">
                    <OverviewDebitCards />
                </div>
                <div className="col-12 col-lg-8">
                    <OverviewActivity />
                </div>
            </div>
        </section>
       
    );
}
 
export default Overview;