import React, {useState, useEffect, useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import { useData } from '../../../hooks/data.hook';

import WelcomeWrapper from '../../../components/dashboard/welcome/wrapper';

import currencyList from '../../../data/currency.js';
import accountTypeOptions from '../../../data/accountTypeOptions.js';

import Input from '../../../components/elements/Forms/input';
import Select from '../../../components/elements/Forms/select';

import './index.scss';

const Welcome = () => {
	const history = useHistory();
    const {fetchDataSingle, updateSingleData, createData} = useData();

	const [user, setUser] = useState();
    const [account, setAccount] = useState({
        accountName: '',
        accountType: accountTypeOptions[0].value,
        accountCurrency: currencyList[0].name,
        balance: 0,
    });

    const getUser = useCallback(async () => {
    	try {
    		let userLocalData = null;
    		if(localStorage.getItem('userData')) {
    		 	userLocalData = JSON.parse(localStorage.getItem('userData'));
    		} else {
    			userLocalData = JSON.parse(sessionStorage.getItem('userData'));
    		}
    		
    		const userId = userLocalData.userId;


    		const user = await fetchDataSingle('auth', userId);

    		setUser(user);
    	} catch(e) {
    		console.log(e);
    	}
    }, [fetchDataSingle]);

    useEffect(() => {
    	getUser();
    }, [getUser]);

    const changeHandler = event => {
        if(event.target.type === 'number') {
            setAccount({...account, [event.target.name]: +event.target.value});
        } else {
            setAccount({...account, [event.target.name]: event.target.value});
        }
    }

    const submitHandler = async e => {
        e.preventDefault();

        try {
            await createData('account/create', {...account});
			await updateSingleData('auth', user._id, {...user, isInitialized: true})

            setAccount({
                accountName: '',
                accountType: '',
                accountCurrency: '',
                balance: 0
            });

            history.push(`/dashboard`);

        } catch (error) {
            console.log(error);
        }
    };

	return (
		<WelcomeWrapper>
			<section className='dashboard-welcome__currency'>
				<form onSubmit={submitHandler} className='add-account__form'>
					<h2 className='add-account__form-title'>Let's create your first account</h2>
	                <div className="row">
	                    <div className="col-12">
	                        <Input 
	                            name='accountName'
	                            isRequired={true}
	                            type='text'
	                            value={account.accountName}
	                            changeHandler={changeHandler}
	                            label='Account name'
	                        />
	                    </div>
	                    <div className="col-12 col-lg-6">
	                        <Select
	                            name='accountType'
	                            options={accountTypeOptions}
	                            value={account.accountType}
	                            label='Account type'
	                            changeHandler={changeHandler}
	                        />
	                    </div>
	                    <div className="col-12 col-lg-6">
	                        <div className="form-group">
					            <select value={account.accountCurrency} onChange={changeHandler} name='accountCurrency' >
					                {currencyList.map((c,index) => {
					                    return <option key={index} value={c.symbol}>{c.name}</option>
					                })}
					            </select>
					            <label htmlFor="select" className="control-label">Set base currency</label>
					            <i className="bar"></i>
					        </div>
	                    </div>
	                    <div className="col-12">
	                        <Input 
	                            name='balance'
	                            isRequired={true}
	                            type='number'
	                            value={account.balance}
	                            changeHandler={changeHandler}
	                            label='Balance'
	                        />
	                    </div>
	                    <input type="submit" className='submit' value="Add Account"/>
	                </div>
	            </form>
				
			</section>
			
		</WelcomeWrapper>
		
	);
}

export default Welcome;