import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {AuthContext} from '../../../../context/AuthContext';

const BottomBar = () => {

    const auth =  useContext(AuthContext);
    return (
        <div className='dashboard-bottom-bar d-flex justify-content-between align-items-center'>
            <div className="dashboard-bottom-bar__help">
                <i className="far fa-comment-dots"></i>
                <NavLink to='/dashboard/help'>Help</NavLink>
                
            </div>
            <div className='dashboard-bottom-bar__close' onClick={auth.logout}>
                <i className="fas fa-door-open"></i>
            </div>
        </div>
    );
}
 
export default BottomBar;