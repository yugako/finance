import React from 'react';
import './index.scss';

const Backdrop = ({clickHandler}) => <div onClick={clickHandler} className='backdrop' />;
 
export default Backdrop;