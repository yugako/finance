import React, { useState, useEffect, useCallback} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { useParams } from 'react-router-dom';
import { useData } from '../../../../hooks/data.hook';

import toogleProgress from '../../../../hooks/progress.hook';

import Headline from '../../../../components/dashboard/headline';
import Loader from '../../../../components/elements/Loader';

import './index.scss';

const options = [
    { value: 'default', label: 'Choose period' },
    { value: 'full', label: 'All time' },
    { value: 'day', label: 'Current Day' },
    { value: 'week', label: 'Current Week' },
    { value: 'month', label: 'Current Month' },
    
];

const SingleAccount = () => {
    const [account , setAccount] = useState(null);
    const [activities , setActivities] = useState(null);
    const [progress, setProgress] = useState();
    const [plotData, setPlotData] = useState(); 

    const {fetchDataList, fetchDataSingle} = useData();

    const accountId = useParams().id;

    const accountActivity = (accountName, accountBalance) => {
        const current = activities && activities.filter(a =>  a.accountName === accountName);

        const data = current && current.map(c => {
            return {
                sortDate: new Date(c.activityDate).getTime(),
                date: new Date(c.activityDate).toLocaleDateString(),
                averageBalance: parseFloat(accountBalance) - c.activitySpendings
            };
        }).sort((a,b) => a.sortDate - b.sortDate);

        return data;
    }

     const changeHandler = event => {
        if(account) {
            const result = accountActivity(account.accountName, account.balance);
       
            const { plotData, percentProgress } = toogleProgress(event.target.value, result, account.balance);

            setPlotData(plotData);
            setProgress(percentProgress);
        }
    }

    const getAccount = useCallback(async () => {
        const accountSingle = await fetchDataSingle('account', accountId);

        setAccount(accountSingle);

    }, [accountId, fetchDataSingle]);

    const getActivities = useCallback(async () => {
        const activities = await fetchDataList('activity');

        setActivities(activities);
    }, [fetchDataList]);


    useEffect(() => {
        getAccount();
        getActivities();
    }, [getAccount, getActivities]);

    if(!account) {
        return (
            <Loader />
        )
    }

    return (
         <section>
            <Headline title={`Account: ${account.accountName}`} />
            <div className="account-period">
                <i className="far fa-calendar"></i>
                <select onChange={changeHandler} className='account-period__select' name="period" id="period">
                    {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
            </div>
            {progress && <div>{progress}</div>}
            {plotData && 
                <ResponsiveContainer width="100%" height={400} >
                    <AreaChart
                        data={plotData}
                        margin={{
                            top: 10, right: 30, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis dataKey="averageBalance"/>
                        <Tooltip />
                        <Area type="monotone" dataKey="averageBalance" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            }
            
        </section>
    );
}
 
export default SingleAccount;