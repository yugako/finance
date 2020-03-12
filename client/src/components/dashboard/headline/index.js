import React from 'react';

import './index.scss';

const Headline = ({title}) => {
    return (
        <div className='dashboard-top-bar d-flex justify-content-between align-items-center'>
            <div className="dashboard-top-bar__title">
                {title}
            </div>
        </div>
    );
}
 
export default Headline;