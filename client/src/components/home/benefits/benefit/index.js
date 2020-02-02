import React from 'react';

const Benefit = ({icon, title, text}) => {
    return (
        <div className='col-12 col-lg-6'>
            <div className='home-benefits__item'>
                <i className={`home-benefits__item-img' ${icon}`} />
                <h4 className='home-benefits__item-title'>{title}</h4>
                <p className='home-benefits__item-text'>{text}</p>
            </div>          
        </div>  
        
    );
}
 
export default Benefit;