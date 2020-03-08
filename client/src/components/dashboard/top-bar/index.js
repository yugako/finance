import React, {useContext, useState, useEffect, useCallback} from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import { useAPI } from '../../../context/DataContext';

import './index.scss';

const TopBar = ({title}) => {
    const { accounts } = useAPI();

    const auth =  useContext(AuthContext);
    const [fullName, setFullName] = useState('user');

    const getFullName = useCallback(() => {    
        if(localStorage.getItem('userName')) {
            const data = localStorage.getItem('userName');
            setFullName(data);
        }
    }, []);

    useEffect(() => {
       getFullName();
    }, [getFullName]);
   

    return (
        <div className='dashboard-top-bar d-flex justify-content-between align-items-center'>
            <div className="dashboard-top-bar__title">
                {title}
            </div>
            <div className="dashboard-top-bar__options d-flex justify-content-between justify-md-content-end align-items-center">
                <div className="dashboard-top-bar__options-new">
                    <img src={require('../../../assets/images/add.png')} alt="+"/>
                    <ul className='dashboard-top-bar__options-new-dropdown dropdown'>
                        <li>
                            <NavLink to="/dashboard/accounts/add">Add account</NavLink>
                        </li>

                        {accounts && accounts.length ?
                            <li>
                                <NavLink to="/dashboard/activity/add">Add activity</NavLink>
                            </li> : null
                        }
                        
                    </ul>
                </div>
                <div className="dashboard-top-bar__options-search">
                   <img src={require('../../../assets/images/search.png')} alt="Find"/>
                </div>
                <div className="dashboard-top-bar__options-badges">
                    <i className="fas fa-bell"></i>
                    <span className='number'>4</span>
                </div>
                <div className="dashboard-top-bar__options-user d-flex align-items-center">
                    <img src="https://www.unicef.org/montenegro/sites/unicef.org.montenegro/files/styles/hero_desktop/public/Nadja%20mlada%20reporterka%20UNICEFova%20volonterka.jpg?itok=vcOwP46I" alt="User"/>
                    <i className="arrow fas fa-angle-down"></i>
                    <ul className='dashboard-top-bar__options-user-dropdown dropdown'>
                        <span>Hello, {fullName}</span>
                        <li>
                            <NavLink to="/dashboard/edit-profile">Edit profile</NavLink>
                        </li>
                        <li>
                            <span onClick={auth.logout}>Log Out</span>
                        </li>
                    </ul>

                    
                </div>
            </div>
        </div>
    );
}
 
export default TopBar;