import React from 'react';
import PropTypes from 'prop-types';

const Select = ({name, options, value, label, changeHandler}) => {
	return (
		<div className="form-group">
        <select value={value} name={name} onChange={changeHandler} >
            {options.map((option,index) => {
                return <option key={index} value={option.value}>{option.label}</option>
            })}
        </select>
        <label htmlFor="select" className="control-label">{label}</label>
        <i className="bar"></i>
    </div>
	);
}

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  label: PropTypes.string,
  changeHandler: PropTypes.func
};

export default Select;