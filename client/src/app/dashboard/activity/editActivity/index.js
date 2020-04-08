import React, {useState, useContext, useEffect, useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import {useHttp} from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';

import { useData } from '../../../../hooks/data.hook';

import Headline from '../../../../components/dashboard/headline';
import Input from '../../../../components/elements/Forms/input';
import Select from '../../../../components/elements/Forms/select';
import Loader from '../../../../components/elements/Loader';

import activityTypeOptions from '../../../../data/activityTypeOptions';

const EditActivity = ({id, title, date, amount, account, type}) => {
    const history = useHistory();

    const { fetchDataList, updateSingleData } = useData();
        
    const auth = useContext(AuthContext);

    const {request} = useHttp();
    
    console.log(type);
    const [activity, setActivity] = useState({
        activityName: title,
        activityType: type,
        activitySpendings: amount,
        accountName: account,
        activityDate: date,
        icon: activityTypeOptions[0].icon,
    });

    const [icon, setIcon] = useState(activityTypeOptions[0].icon);

    const [accounts, setAccounts] = useState();

    const changeHandler = event => {
    
        if(event.target.name === 'activityType') {
            setIcon(event.target.options[event.target.selectedIndex].dataset.icon);
        }
        
        setActivity({...activity, [event.target.name]: event.target.value, icon});
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

            updateSingleData('activity', id, {...activity});

            await request(`/api/account/${currentAccount._id}`, 'PUT', currentAccount, {
                Authorization: `Bearer ${auth.token}`
            });

            setActivity({
                activityName: '',
                activityType: '',
                activitySpendings: '',
                accountName: '',
                activityDate: '',
                icon: '', 
            });

            history.push(`/dashboard/activity`);

        } catch (error) { console.log(error); }
    };

     if(!accounts) {
        return (
            <Loader />
        )
    }

    return (
        <div className='add-activity'>      
            <form onSubmit={submitHandler} className='add-account__form'>
                <Headline title='Edit activity' />  
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
                        <div className="form-group">
                            <select value={activity.activityType} name='activityType' onChange={changeHandler} >
                                {activityTypeOptions.map((option,index) => {
                                    if(option.subOptions) {
                                        return (
                                            <optgroup key={index} label={option.label}>
                                                {option.subOptions.map((sub, index) => {
                                                   return <option key={index} data-icon={sub.icon} value={sub.value}>{sub.label}</option>
                                                })}
                                                
                                            </optgroup>
                                        );
                                    } else {
                                        return <option key={index} data-icon={option.icon} value={option.value}>
                                            {option.label}
                                            </option>
                                    }
                                })}
                            </select>
                            <label htmlFor="select" className="control-label">Activity type</label>
                            <i className="bar"></i>
                        </div>
                        {/* <Select 
                            name='activityType'
                            options={activityTypeOptions}
                            value={activity.activityType}
                            label='Activity type'
                            changeHandler={changeHandler}
                        /> */}
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
                    <input type="submit"  className='submit' value="Edit Activity"/>
                </div>
                
            </form>
        </div>
    );
}
 
export default EditActivity;