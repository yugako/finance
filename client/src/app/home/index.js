import React from 'react';

import HomeBanner from '../../components/home/banner';
import Features from '../../components/home/features';
import HomeFooter from '../../components/home/footer';
import HomeBenefits from '../../components/home/benefits';

const Home = () => {
    return (
        <>  
            <HomeBanner />
            <main className='home-main'>
                {/* <Features /> */}
                <HomeBenefits />
            </main>
            <HomeFooter />
        </>
    );
}

export default Home;