import React from 'react';

const Input = ({name, isRequired=false, type='text', value, changeHandler, label}) => {
	return (
		<div className="form-group">
            <input name={name} required={isRequired} type={type}
                value={value}
                onChange={changeHandler} />
            <label htmlFor="input" className="control-label">
                {label}
            </label>
            <i className="bar"></i>
        </div>
	);
}

export default Input;