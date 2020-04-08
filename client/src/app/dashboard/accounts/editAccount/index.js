import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import Headline from '../../../../components/dashboard/headline';
import Input from '../../../../components/elements/Forms/input';
import Select from '../../../../components/elements/Forms/select';

import currencyList from '../../../../data/currency';
import accountTypeOptions from '../../../../data/accountTypeOptions';
import { useData } from '../../../../hooks/data.hook';

// import './index.scss';

const EditAccount = ({currentAccount}) => {
    const history = useHistory();
    const {updateSingleData} = useData(); 

    const [account, setAccount] = useState({
        accountName: currentAccount.accountName,
        accountType: currentAccount.accountType,
        accountCurrency: currentAccount.accountCurrency,
        balance: currentAccount.balance
    });

    console.log(currentAccount);
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
            updateSingleData('account', currentAccount._id, {...account})

            setAccount({
                accountName: '',
                accountType: '',
                accountCurrency: '',
                balance: 0
            });

            history.push(`/dashboard/accounts/${currentAccount._id}`);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='add-account'>         
            <form onSubmit={submitHandler} className='add-account__form'>
                <Headline title='Edit account' /> 
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
                    <input type="submit" className='submit' value="Edit Account"/>
                </div>
            </form>
        </div>
    );
}
 
export default EditAccount;