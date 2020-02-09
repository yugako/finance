import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';


import Pig from '../../assets/images/pig.svg';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';

const Register = () => {
    const {loading, error, request, clearError} = useHttp();
    const message = useMessage();

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        terms: '',
    });

    useEffect(() => {
        console.log(error);
        message(error);
        clearError();
    }, [error, message, clearError]);

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
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
                terms: '',
            })

            console.log(message(data.message));
            
        } catch (error) {
            
        }
    }

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
                        <form onSubmit={registerHandler}>
                            <div class="form-group">
                                <input onChange={changeHandler} name='first_name' required type="text"/>
                                <label for="input" class="control-label">First Name</label>
                                <i class="bar"></i>
                            </div>
                            <div class="form-group">
                                <input onChange={changeHandler} name='last_name' required type="text"/>
                                <label for="input" class="control-label">Last Name</label>
                                <i class="bar"></i>
                            </div>
                            <div class="form-group">
                                <input onChange={changeHandler} name='email' required type="email"/>
                                <label for="input" class="control-label">Email address</label>
                                <i class="bar"></i>
                            </div>
                            <div class="form-group">
                                <input onChange={changeHandler} name='password' required type="password"/>
                                <label 
                                    for="input" class="control-label">
                                    Password
                                </label>
                                <i class="bar"></i>
                            </div>

                            <div class="checkbox terms-label">
                                <label>
                                    <input required name='terms' type="checkbox"/>
                                    <i class="helper"></i>
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