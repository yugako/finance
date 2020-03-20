import React, {useState, useContext, useEffect, useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import {useHttp} from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';

import { useData } from '../../../../hooks/data.hook';

import Headline from '../../../../components/dashboard/headline';
import Input from '../../../../components/elements/Forms/input';
import Select from '../../../../components/elements/Forms/select';
import Loader from '../../../../components/elements/Loader';

const activityTypeOptions = [
    {
        value: 'Food & Drinks',
        label: 'Food & Drinks',
        subOptions: [
            {
                value: 'Food & Drinks - General',
                label: 'Food & Drinks - General',
            },
            {
                value: 'Bar, cafe',
                label: 'Bar, cafe',
            },
            {
                value: 'Groceries',
                label: 'Groceries',
            },
            {
                value: 'Restaurant, fast-food',
                label: 'Restaurant, fast-food',
            }
        ],
    },
    {
        value: 'Shopping',
        label: 'Shopping',
        subOptions: [
            {
                value: 'Shopping - General',
                label: 'Shopping - General',
            },
            {
                value: 'Clothes & Shoes',
                label: 'Clothes & Shoes',
            },
            {
                value: 'Drug-store, chemist',
                label: 'Drug-store, chemist',
            },
            {
                value: 'Electronics, accessories',
                label: 'Electronics, accessories',
            },
            {
                value: 'Free Time',
                label: 'Electronics, accessories',
            }
        ],
    },
    {
        value: 'Housing',
        label: 'Housing',
    },
    {
        value: 'Transportation',
        label: 'Transportation',
    },
    {
        value: 'Vehicle',
        label: 'Vehicle',
    },
    {
        value: 'Life & Entertainment',
        label: 'Life & Entertainment',
    },
    {
        value: 'Communication, PC',
        label: 'Communication, PC',
    },
    {
        value: 'Financial Expenses',
        label: 'Financial Expenses',
    },
    {
        value: 'Investments',
        label: 'Investments',
    },
    {
        value: 'Income',
        label: 'Income',
    },
    {
        value: 'Others',
        label: 'Others',
    },
];

const AddActivity = () => {
    const history = useHistory();

    const { fetchDataList } = useData();
        
    const auth = useContext(AuthContext);

    const {request} = useHttp();

    const [activity, setActivity] = useState({
        activityName: '',
        activityType: activityTypeOptions[0].value,
        activitySpendings: '',
        accountName: '',
        activityDate: '',
    });

    const [accounts, setAccounts] = useState();

    const changeHandler = event => {
        console.log(activity);
        
       setActivity({...activity, [event.target.name]: event.target.value})
    };
    
    const getAccounts = useCallback(async () => {
        const accountsList = await fetchDataList('account');

        setAccounts(accountsList);

        accountsList && setActivity(activity => {
            return {...activity, accountName: accountsList[0].accountName}; 
        });

    }, [fetchDataList]);


    const transformAccountData = (data) => {
        return data.map(d => {
            return {
                value: d.accountName,
                label: d.accountName
            }
        });
    }

    useEffect(() => {
        getAccounts();
    }, [getAccounts]);
    

    const submitHandler = async e => {
        e.preventDefault();

        try {
            const currentAccount = accounts.find(account => activity.accountName === account.accountName);

            currentAccount.balance = parseFloat(currentAccount.balance) + parseFloat(activity.activitySpendings);

            const data = await request('/api/activity/create', 'POST', {...activity}, {
                Authorization: `Bearer ${auth.token}`
            });

            await request(`/api/account/${currentAccount._id}`, 'PUT', currentAccount, {
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

     if(!accounts) {
        return (
            <Loader />
        )
    }

    return (
        <div className='add-activity'>
            <Headline title='Add activity' />            
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
                                value={activity.accountName}
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