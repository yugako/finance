import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AccountTrend = ({data}) => {
    return (
        <>
            {data && 
                <ResponsiveContainer width="100%" height={400} >
                    <AreaChart
                        data={data}
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
        </>
    );
}
 
export default AccountTrend;