import React from 'react';

const TopBar = ({title}) => {
    return (
        <div className='dashboard-top-bar d-flex justify-content-between align-items-center'>
            <div className="dashboard-top-bar__title">
                {title}
            </div>
            <div className="dashboard-top-bar__options d-flex justify-content-end align-items-center">
                <div className="dashboard-top-bar__options-new">
                    <img src={require('../../../assets/images/add.png')} alt="+"/>
                </div>
                <div className="dashboard-top-bar__options-search">
                   <img src={require('../../../assets/images/search.png')} alt="Find"/>
                </div>
                <div className="dashboard-top-bar__options-badges">
                    <i class="fas fa-bell"></i>
                    <span className='number'>4</span>
                </div>
                <div className="dashboard-top-bar__options-user d-flex align-items-center">
                    <img src="https://www.unicef.org/montenegro/sites/unicef.org.montenegro/files/styles/hero_desktop/public/Nadja%20mlada%20reporterka%20UNICEFova%20volonterka.jpg?itok=vcOwP46I" alt="User"/>
                    <i class="arrow fas fa-angle-down"></i>
                    <ul className='dashboard-top-bar__options-user-dropdown'>
                        <li>
                            <a href="#">Edit profile</a>
                        </li>
                        <li>
                            <a href="#">Log Out</a>
                        </li>
                    </ul>

                    
                </div>
            </div>
        </div>
    );
}
 
export default TopBar;