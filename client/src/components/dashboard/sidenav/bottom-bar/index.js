import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.scss';

const BottomBar = () => {

    return (
        <div className='dashboard-bottom-bar d-flex justify-content-between align-items-center'>
            <div className="dashboard-bottom-bar__help">
                <i className="far fa-comment-dots"></i>
                <NavLink to='/dashboard/help'>Help</NavLink>
            </div>
        </div>
    );
}
 
export default BottomBar;