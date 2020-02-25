import React, {useState, useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

import Pig from '../../assets/images/pig.svg';
import { useHttp } from '../../hooks/http.hook';
import Message from '../../components/elements/Message';

import './index.scss';
const Register = () => {
    const {loading, error, request, clearError} = useHttp();
    const [localError, setLocalError] = useState([]);
    const history = useHistory();
    
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        terms: '',
    });

    useEffect(() => {
        setLocalError(error);

        setTimeout(() => {
            clearError();
        }, 5000);
    }, [error, clearError]);

    const changeHandler = event => {
        if(event.target.type === 'checkbox') {
            setForm({...form, [event.target.name]: event.target.checked});
        } else {
            setForm({...form, [event.target.name]: event.target.value});
        }
    }

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await request('/api/auth/register', 'POST', {
                ...form
            });

            setForm({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                terms: false,
            });

            history.push(`/login`);
            
        } catch (error) { }
    }

    return (
        <section className='register'>
            {!loading && localError ? <Message message={localError} />: null}
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 h-100">
                        <img src={Pig} alt=""/>
                    </div>
                    <div className="col-12 col-lg-6 h-100">
                        <div className="register-title title">
                                Sign up 
                        </div>
                        <form onSubmit={registerHandler}>
                            <div className="form-group">
                                <input onChange={changeHandler} value={form.first_name} name='first_name' required type="text"/>
                                <label htmlFor="input" className="control-label">First Name</label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input onChange={changeHandler} value={form.last_name} name='last_name' required type="text"/>
                                <label htmlFor="input" className="control-label">Last Name</label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input onChange={changeHandler} value={form.email} name='email' required type="email"/>
                                <label htmlFor="input" className="control-label">Email address</label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input onChange={changeHandler} value={form.password} name='password' required type="password"/>
                                <label 
                                    htmlFor="input" className="control-label">
                                    Password
                                </label>
                                <i className="bar"></i>
                            </div>

                            <div className="checkbox terms-label">
                                <label>
                                    <input required name='terms' type="checkbox"/>
                                    <i className="helper"></i>
                                    I have read the 
                                    <NavLink to='/terms'>
                                        Terms and Conditions.
                                    </NavLink>
                                </label>
                            </div>
                            <button 
                                disabled={loading} 
                                type="submit" className='submit'>Sign Up</button>
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