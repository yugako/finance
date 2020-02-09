import React, {useState, useEffect, useContext} from 'react';

import {NavLink} from 'react-router-dom';

import Pig from '../../assets/images/pig.svg';

import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';
import { AuthContext } from '../../context/AuthContext';
const Login = () => {

    const {loading, error, request, clearError} = useHttp();
    const auth =  useContext(AuthContext);
    const message = useMessage();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        console.log(error);
        message(error);
        clearError();
    }, [error, message, clearError]);

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await request('/api/auth/login', 'POST', {
                ...form
            });

            auth.login(data.token, data.userId);
            
        } catch (error) {
            
        }
    }
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
                        <form onSubmit={loginHandler}>
                            <div class="form-group">
                                <input name='email'  onChange={changeHandler} required type="email"/>
                                <label for="input" class="control-label">Email address</label>
                                <i class="bar"></i>
                            </div>
                            <div class="form-group">
                                <input name='password' onChange={changeHandler} required type="password"/>
                                <label for="input" class="control-label">Password</label>
                                <i class="bar"></i>
                            </div>
                            <input type="submit"  className='submit' value="Sign Up"/>
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