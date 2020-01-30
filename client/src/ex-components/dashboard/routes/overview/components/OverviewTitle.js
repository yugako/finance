import {NavLink as Link} from "react-router-dom";
import React from "react";


export default ({title, link}) => {
    return (
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3'>
            <h4>{title}</h4>
            <Link className="btn btn-sm btn-outline-secondary" to={link}>Edit</Link>
        </div>
    );
}