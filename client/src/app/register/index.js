import React, {useState, useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

import Pig from '../../assets/images/pig.svg';
import { useHttp } from '../../hooks/http.hook';
import Message from '../../components/elements/Message';
import Input from '../../components/elements/Forms/input';

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
            await request('/api/auth/register', 'POST', {
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
                            <Input 
                                name='first_name'
                                isRequired={true}
                                type='text'
                                value={form.first_name}
                                changeHandler={changeHandler}
                                label='First Name'
                            />
                            <Input 
                                name='last_name'
                                isRequired={true}
                                type='text'
                                value={form.last_name}
                                changeHandler={changeHandler}
                                label='Last Name'
                            />
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