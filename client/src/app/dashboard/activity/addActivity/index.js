import React, {useState, useContext, useEffect, useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import {useHttp} from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';
import TopBar from '../../../../components/dashboard/top-bar';


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
    const auth = useContext(AuthContext);
    const {token} = useContext(AuthContext);
    const {loading,request} = useHttp();

    const [accounts, setAccounts] = useState(null);
    const [activity, setActivity] = useState({
        activityName: '',
        activityType: '',
        activitySpendings: '',
        accountName: '',
        activityDate: '',
    });

    const changeHandler = event => {
        setActivity({...activity, [event.target.name]: event.target.value});
        console.log(activity);
    }

    const fetchAccounts = useCallback(async () => {
        try {
            const data = await request('/api/account', 'GET', null, {
                Authorization: `Bearer ${token}`
            });

            setAccounts(data);

            setActivity({
                ...activity, 
                accountName: data[0].acountName,
                activityType: activityTypeOptions[0].value
            });
        } catch (e) {}
    }, [token, request]);

    useEffect(() => {
        fetchAccounts();
    }, [fetchAccounts]);

    const submitHandler = async e => {
        e.preventDefault();

        try {
            const data = await request('/api/activity/create', 'POST', {...activity}, {
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

        } catch (error) {}
    };

    return (
        <div className='add-activity'>
            <TopBar title='Add activity' />            
            <form onSubmit={submitHandler} className='add-account__form'>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <input name='activityName' required type="text"
                                value={activity.activityName}
                                onChange={changeHandler} />
                            <label htmlFor="input" className="control-label">
                                Activity name
                            </label>
                            <i className="bar"></i>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input name='activitySpendings' required type="text"
                                value={activity.activitySpendings}
                                onChange={changeHandler} />
                            <label htmlFor="input" className="control-label">
                                Spendings
                            </label>
                            <i className="bar"></i>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="form-group">
                            {!loading && accounts && 
                                <select value='' name='accountName' onChange={changeHandler}>
                                    {accounts.map((option,index) => {
                                        return <option key={index} value={option.acountName}>{option.acountName}</option>
                                    })}
                                </select>
                            }
                            <label htmlFor="select" className="control-label">Account type</label><i className="bar"></i>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="form-group">
                            <select value={activityTypeOptions[0].value} name='activityType' onChange={changeHandler} >
                                {activityTypeOptions.map((option, index) => {
                                    return <option key={index} value={option.value}>{option.label}</option>
                                })}
                            </select>
                            <label htmlFor="select" className="control-label">Activity type</label><i className="bar"></i>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input name='activityDate' required type="date"
                                value={activity.activityDate}
                                onChange={changeHandler} />
                            <label htmlFor="input" className="control-label">
                                Activity date
                            </label>
                            <i className="bar"></i>
                        </div>
                    </div>
                    
                    
                    <input type="submit"  className='submit' value="Add Account"/>
                </div>
                
            </form>
        </div>
    );
}
 
export default AddActivity;