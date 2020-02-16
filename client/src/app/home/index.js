import React from 'react';

import HomeBanner from '../../components/home/banner';
import HomeFooter from '../../components/home/footer';
import HomeBenefits from '../../components/home/benefits';

const Home = () => {
    return (
        <>  
            <HomeBanner />
            <main className='home-main'>
                <HomeBenefits />
            </main>
            <HomeFooter />
        </>
    );
}

export default Home;