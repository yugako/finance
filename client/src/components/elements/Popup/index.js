import React from 'react';

import './index.scss';

const Popup = ({open, children}) => {
    if (open) {
        return (
            <>
               <div className="popup">
                   <div className='popup-content'>
                       {children}
                   </div>
               </div>
           </>
       );
    }
    
    return null;
}
 
export default Popup;