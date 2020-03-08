import React, {useState, useContext, useEffect, useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import {useHttp} from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';
import { useAPI } from '../../../../context/DataContext';

import TopBar from '../../../../components/dashboard/top-bar';
import Input from '../../../../components/elements/Forms/input';
import Select from '../../../../components/elements/Forms/select';

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

const activityTypeOptions = [
    {
        value: 'Food',
        label: 'Food',
    },
    {
        value: 'General',
        label: 'General',
    },
    {
        value: 'Bills',
        label: 'Bills',
    },
    {
        value: 'Income',
        label: 'Income',
    }
];

const AddActivity = () => {
    const history = useHistory();
    const { accounts } = useAPI();
    
    const auth = useContext(AuthContext);

    const {loading,request} = useHttp();

    const [activity, setActivity] = useState({
        activityName: '',
        activityType: activityTypeOptions[0].value,
        activitySpendings: '',
        accountName: '',
        activityDate: '',
    });

    const changeHandler = event => setActivity({...activity, [event.target.name]: event.target.value});

    /* Handle changed data */
    const updateData = useCallback(() => {
        if (accounts) {
            setActivity({...activity, accountName: accounts[0].accountName});
        }
            
    }, [accounts]);

    const transformAccountData = (data) => {
        return data.map(d => {
            return {
                value: d.accountName,
                label: d.accountName
            }
        });
    }

    useEffect(() => {
        updateData();
    }, [updateData]);
    

    const submitHandler = async e => {
        e.preventDefault();

        try {
            const currentAccount = accounts.find(account => activity.accountName === account.accountName);

            currentAccount.balance = parseFloat(currentAccount.balance) + parseFloat(activity.activitySpendings);

            const data = await request('/api/activity/create', 'POST', {...activity}, {
                Authorization: `Bearer ${auth.token}`
            });

            const update = await request(`/api/account/${currentAccount._id}`, 'PUT', currentAccount, {
                Authorization: `Bearer ${auth.token}`
            });

            setActivity({
                activityName: '',
                activityType: '',
                activitySpendings: '',
                accountName: '',
                activityDate: '', 
            });

            history.push(`/dashboard/activity/${data.activity._id}`);

        } catch (error) { console.log(error); }
    };

    return (
        <div className='add-activity'>
            <TopBar title='Add activity' />            
            <form onSubmit={submitHandler} className='add-account__form'>
                <div className="row">
                    <div className="col-12">
                        <Input 
                            name='activityName'
                            isRequired={true}
                            type='text'
                            value={activity.activityName}
                            changeHandler={changeHandler}
                            label='Activity name'
                        />
                    </div>
                    <div className="col-12">
                        <Input 
                            name='activitySpendings'
                            isRequired={true}
                            type='number'
                            value={activity.activitySpendings}
                            changeHandler={changeHandler}
                            label='Spendings'
                        />
                    </div>
                    
                    <div className="col-12 col-lg-6">
                        {accounts &&
                            <Select 
                                name='accountName'
                                options={transformAccountData(accounts)}
                                value={accounts[0].accountName}
                                label='Account type'
                                changeHandler={changeHandler}
                            />
                        }
                    </div>
                    <div className="col-12 col-lg-6">
                        <Select 
                            name='activityType'
                            options={activityTypeOptions}
                            value={activity.activityType}
                            label='Activity type'
                            changeHandler={changeHandler}
                        />
                    </div>
                    <div className="col-12">
                        <Input 
                            name='activityDate'
                            isRequired={true}
                            type='date'
                            value={activity.activityDate}
                            changeHandler={changeHandler}
                            label='Activity date'
                        />
                    </div>
                    <input type="submit"  className='submit' value="Add Account"/>
                </div>
                
            </form>
        </div>
    );
}
 
export default AddActivity;