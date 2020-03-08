import React, { useState, useEffect, useCallback} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { useParams } from 'react-router-dom';
import { useAPI } from '../../../../context/DataContext';

import TopBar from '../../../../components/dashboard/top-bar';

const SingleAccount = () => {
    const { accounts, activities } = useAPI();
    const [account , setAccount] = useState(null);

    const accountId = useParams().id;

    const accountActivity = (accountName, accountBalance) => {
        const current = activities.filter(a =>  a.accountName === accountName);

        const data = current.map(c => {
            return {
                sortDate: new Date(c.activityDate).getTime(),
                displayDate: new Date(c.activityDate).toLocaleDateString(),
                currentBalance: parseFloat(accountBalance) - c.activitySpendings
            };
        }).sort((a,b) => a.date - b.date).reverse();

        return data;
    }

    const getCurrentAccount = useCallback(() => {
        const currentAccount = accounts && accounts.filter(a => a._id === accountId)[0];
        setAccount(currentAccount);
    });
    
    useEffect(() => {
       getCurrentAccount();
    }, [getCurrentAccount]);

    return (
        <>
            { account && 
                <section>
                    <TopBar title={`Account: ${account.accountName}`} />
                    <ResponsiveContainer width="100%" height={400} >
                        <AreaChart
                            data={accountActivity(account.accountName, account.balance)}
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