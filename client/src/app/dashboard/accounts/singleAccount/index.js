import React, { useState, useCallback, useContext, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { useParams } from 'react-router-dom';
import { useHttp } from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';
import Loader from '../../../../components/elements/Loader';
import TopBar from '../../../../components/dashboard/top-bar';

const SingleAccount = () => {
    const {request, loading} = useHttp();
    const {token} = useContext(AuthContext);
    const [account , setAccount] = useState(null);
    const [activity , setActivity] = useState(null);

    const accountId = useParams().id;

    const getData = useCallback(async () => {
        try {
            const accountData = await request(`/api/account/${accountId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });

            const activityList = await request('/api/activity', 'GET', null, {
                Authorization: `Bearer ${token}`
            });

            setActivity(activityList);
            setAccount(accountData);
        } catch (e) {}
    }, [token, accountId, request]);

    const accountActivity = (accountName, accountBalance) => {
        const current = !loading && activity && activity.filter(a =>  a.accountName === accountName);

        const data = !loading && current && current.map(c => {
            return {
                sortDate: new Date(c.activityDate).getTime(),
                displayDate: new Date(c.activityDate).toLocaleDateString(),
                currentBalance: parseFloat(accountBalance) - c.activitySpendings
            };
        }).sort((a,b) => a.date - b.date).reverse();

        return data;
    }

    useEffect(() => {
        getData();
    }, [getData]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            {!loading && account && 
                <section>
                    <TopBar title={`Account: ${account.acountName}`} />
                    <ResponsiveContainer width="100%" height={400} >
                        <AreaChart
                            data={accountActivity(account.acountName, account.balance)}
                            margin={{
                                top: 10, right: 30, left: 0, bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="displayDate" />
                            <YAxis dataKey="currentBalance"/>
                            <Tooltip />
                            <Area type="monotone" dataKey="currentBalance" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </section>
            }
        </>
        
    );
}
 
export default SingleAccount;