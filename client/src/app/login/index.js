import React, {useState, useEffect, useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';

import Pig from '../../assets/images/pig.svg';
import Message from '../../components/elements/Message';
import Input from '../../components/elements/Forms/input';


import './index.scss';
const Login = () => {
    const {loading, error, request, clearError} = useHttp();
    const history = useHistory();
    const auth =  useContext(AuthContext);
    const [localError, setLocalError] = useState([]);

    const [form, setForm] = useState({
        email: '',
        password: '',
        keep_logged: false,
    });


    useEffect(() => {
        setLocalError(error);
        setTimeout(() => clearError(), 5000);
    }, [error, clearError]);


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
            localStorage.setItem('userName', data.userFirstName);

            if(data.isInitialized) {
                history.push('/dashboard');
            } else {
                history.push('/dashboard/welcome');
            }
            
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className='login'>
            {!loading && localError ? <Message message={localError} />: null}
            
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
                            <Input 
                                name='email'
                                isRequired={true}
                                type='email'
                                value={form.email}
                                changeHandler={changeHandler}
                                label='Email address'
                            />
                            <Input 
                                name='password'
                                isRequired={true}
                                type='password'
                                value={form.password}
                                changeHandler={changeHandler}
                                label='Password'
                            />
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