import React from 'react';
import {NavLink} from 'react-router-dom';

const DashboardLogo = () => {
    return (
        <NavLink to='/' className='dashboard-logo'>
           <img src={require("../../../assets/images/dashboard_logo.png")} alt="wallet.on"/>
        </NavLink>
    );
}
 
export default DashboardLogo;