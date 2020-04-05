import React, { useState } from 'react';
import Backdrop from '../Backdrop';

import './index.scss';
const Popup = ({open, children}) => {
    let [isOpen, setOpen] = useState(open);

    const togglePopupHandler = () => {
        setOpen(isOpen = !isOpen);
    }

    if (isOpen) {
        return (
            <>
               <div className="popup">
                   <div className='popup-content'>
                       {children}
                   </div>
               </div>
               <Backdrop clickHandler={togglePopupHandler} />
           </>
       );
    }

    return null;
    
   
    
}
 
export default Popup;