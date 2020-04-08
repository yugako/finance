import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import {useHttp} from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';

import Headline from '../../../../components/dashboard/headline';
import Input from '../../../../components/elements/Forms/input';
import Select from '../../../../components/elements/Forms/select';

import currencyList from '../../../../data/currency';
import accountTypeOptions from '../../../../data/accountTypeOptions';
import './index.scss';

const AddAccount = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const [account, setAccount] = useState({
        accountName: '',
        accountType: accountTypeOptions[0].value,
        accountCurrency: currencyList[0].name,
        balance: 0,
    });

    const {request} = useHttp();

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
            const data = await request('/api/account/create', 'POST', {...account}, {
                Authorization: `Bearer ${auth.token}`
            });

            setAccount({
                accountName: '',
                accountType: '',
                accountCurrency: '',
                balance: 0
            });

            history.push(`/dashboard/accounts/${data.account._id}`);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='add-account'>       
            <form onSubmit={submitHandler} className='add-account__form'>
                <Headline title='Add account' /> 
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
                            <label htmlFor="select" className="control-label">Account currency</label>
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
        </div>
    );
}
 
export default AddAccount;