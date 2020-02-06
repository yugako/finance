import React from 'react';

const BottomBar = () => {
    return (
        <div className='dashboard-bottom-bar d-flex justify-content-between align-items-center'>
            <div className="dashboard-bottom-bar__help">
                <i class="far fa-comment-dots"></i>
                Help
            </div>
            <div className='dashboard-bottom-bar__close'>
                <i class="fas fa-door-open"></i>
            </div>
        </div>
    );
}
 
export default BottomBar;