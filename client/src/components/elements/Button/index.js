import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';


const Button = ({text, classes}) => {
    return (
        <button className={`button ${classes}`}>{text}</button>
    );
}

Button.propTypes = {
	text: PropTypes.string,
	classes: PropTypes.string
}
 
export default Button;