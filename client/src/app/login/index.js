import React, {useState, useEffect, useContext} from 'react';
import {NavLink} from 'react-router-dom';

import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';
import { AuthContext } from '../../context/AuthContext';

import Pig from '../../assets/images/pig.svg';

const Login = () => {

    const {loading, error, request, clearError} = useHttp();
    const auth =  useContext(AuthContext);
    const message = useMessage();

    const [form, setForm] = useState({
        email: '',
        password: '',
        keep_logged: '',
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);


    const changeHandler = event => {
        if(event.target.type === 'checkbox') {
            setForm({...form, [event.target.name]: event.target.checked});
        } else {
            setForm({...form, [event.target.name]: event.target.value});
        }
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await request('/api/auth/login', 'POST', {
                ...form
            });

            auth.login(data.token, data.userId, form.keep_logged);
            
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
                            <div className="form-group">
                                <input name='email' value={form.email}  onChange={changeHandler} required type="email"/>
                                <label htmlFor="input" className="control-label">Email address</label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input name='password' value={form.password} onChange={changeHandler} required type="password"/>
                                <label htmlFor="input" className="control-label">Password</label>
                                <i className="bar"></i>
                            </div>
                            <div className="checkbox terms-label">
                                <label>
                                    <input onChange={changeHandler} name='keep_logged' type="checkbox"/>
                                    <i className="helper"></i>
                                    Keep logged in?
                                </label>
                            </div>
                            <input type="submit" disabled={loading}  className='submit' value="Sign In"/>
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