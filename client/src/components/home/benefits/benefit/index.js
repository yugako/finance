import React from 'react';

const Benefits = ({icon, title, text, reverse = false}) => {
    return (
        <div className='col-12'>
            <div className='home-benefits__item'>
                <div className={`row align-items-center ${reverse ? 'row-reverse': ''}`}>
                    <div className="col-12 col-lg-6 img-wrapper">
                        <img className='home-benefits__item-img' src={icon} alt={title}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h4 className='home-benefits__item-title'>{title}</h4>
                        <p className='home-benefits__item-text'>{text}</p>
                    </div>
                </div>
                
                
            </div>          
        </div>  
        
    );
}
 
export default Benefits;