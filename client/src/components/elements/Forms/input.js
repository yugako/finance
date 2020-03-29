import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, isRequired=false, type='text', value, changeHandler = () => {}, inputHandler = () => {}, label}) => {
	return (
		<div className="form-group">
            <input name={name} required={isRequired} type={type}
                value={value}
                onChange={changeHandler}
                onInput={inputHandler} />
            <label htmlFor="input" className="control-label">
                {label}
            </label>
            <i className="bar"></i>
        </div>
	);
}

Input.propTypes = {
    name: PropTypes.string,
    isRequired: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    type: PropTypes.string,
    changeHandler: PropTypes.func,
    label: PropTypes.string
}

export default Input;