import React from 'react';

const Feature = ({icon, title, text}) => {
    return (
        <div className='col-12 col-lg-4'>
            <div className='home-features__item'>
                <img className='home-features__item-img' src={icon} alt={title}/>
                <h4 className='home-features__item-title'>{title}</h4>
                <p className='home-features__item-text'>{text}</p>
            </div>          
        </div>  
        
    );
}
 
export default Feature;