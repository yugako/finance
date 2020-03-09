import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import {useHttp} from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';

import TopBar from '../../../../components/dashboard/top-bar';
import Input from '../../../../components/elements/Forms/input';
import Select from '../../../../components/elements/Forms/select';
import './index.scss';

const accountTypeOptions = [
    {
        value: 'Checking/Cash',
        label: 'Checking/Cash',
    },
    {
        value: 'Savings',
        label: 'Savings',
    },
    {
        value: 'Credit Card',
        label: 'Credit Card',
    },
    {
        value: 'Investment',
        label: 'Investment',
    },
    {
        value: 'Other',
        label: 'Other',
    }
];

const accountCurrencyOptions = [
    {
        value: 'USD',
        label: 'US Dollar',
    },
    {
        value: 'EUR',
        label: 'Euro',
    },
    {
        value: 'GBP',
        label: 'Pounds sterling',
    },
    {
        value: 'UAH',
        label: 'Ukrainian hryvna',
    }
];

const AddAccount = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const [account, setAccount] = useState({
        accountName: '',
        accountType: accountTypeOptions[0].value,
        accountCurrency: accountCurrencyOptions[0].value,
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
            <TopBar title='Add account' />            
            <form onSubmit={submitHandler} className='add-account__form'>
                <div className="row">
                    <div className="col-12">
                        <Input 
                            name='accountName'
                            isRequired='true'
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
                        <Select
                            name='accountCurrency'
                            options={accountCurrencyOptions}
                            value={account.accountCurrency}
                            label='Account currency'
                            changeHandler={changeHandler}
                        />
                    </div>
                    <div className="col-12">
                        <Input 
                            name='balance'
                            isRequired='true'
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