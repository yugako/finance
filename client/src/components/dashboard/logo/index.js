import React from 'react';

const DashboardLogo = () => {
    return (
        <a href='#' className='dashboard-logo'>
           <img src={require("../../../assets/images/dashboard_logo.png")} alt="wallet.on"/>
        </a>
    );
}
 
export default DashboardLogo;