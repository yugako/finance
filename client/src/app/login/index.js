import React from 'react';
import {NavLink} from 'react-router-dom';

import Pig from '../../assets/images/pig.svg';
const Login = () => {
    return (
        <section className='login'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 h-100">
                        <img src={Pig} alt=""/>
                    </div>
                    <div className="col-12 col-lg-6 h-100">
                        <div className="login-title title">
                                Sign in
                        </div>
                        <form>
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
                            <input type="submit" className='submit' value="Sign Up"/>
                        </form>
                        <div className="login-cta d-flex justify-content-between">
                            <div className="go-auth">
                                Don’t have an account?
                                <NavLink to='/register'>Sign Up</NavLink>
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
 
export default Login;