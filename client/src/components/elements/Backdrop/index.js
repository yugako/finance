import React from 'react';
import './index.scss';

const Backdrop = ({clickHandler = () => {}, hideOnLargeScreen = false}) => <div onClick={clickHandler} className={`backdrop ${hideOnLargeScreen ? 'lg-none' : ''}`} />;
 
export default Backdrop;