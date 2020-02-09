import React from 'react';
import {NavLink} from 'react-router-dom';

import Pig from '../../assets/images/pig.svg';
const Register = () => {
    return (
        <section className='register'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 h-100">
                        <img src={Pig} alt=""/>
                    </div>
                    <div className="col-12 col-lg-6 h-100">
                        <div className="register-title title">
                                Sign up 
                        </div>
                        <form>
                            <div class="form-group">
                                <input required type="text"/>
                                <label for="input" class="control-label">First Name</label>
                                <i class="bar"></i>
                            </div>
                            <div class="form-group">
                                <input required type="text"/>
                                <label for="input" class="control-label">Last Name</label>
                                <i class="bar"></i>
                            </div>
                            <div class="form-group">
                                <input required type="email"/>
                                <label for="input" class="control-label">Email address</label>
                                <i class="bar"></i>
                            </div>
                            <div class="form-group">
                                <input required type="password"/>
                                <label for="input" class="control-label">Password</label>
                                <i class="bar"></i>
                            </div>

                            <div class="checkbox terms-label">
                                <label>
                                    <input type="checkbox"/><i class="helper"></i>
                                    I have read the 
                                    <NavLink to='/terms'>
                                        Terms and Conditions.
                                    </NavLink>
                                </label>
                            </div>
                            <input type="submit" className='submit' value="Sign Up"/>
                        </form>
                        <div className="register-cta d-flex justify-content-between">
                            <div className="go-auth">
                                Already have an account?
                                <NavLink to='/login'>Sign In</NavLink>
                            </div>
                            <div className="go-home">
                                <NavLink to='/'>Back To Home</NavLink>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    );
}
 
export default Register;