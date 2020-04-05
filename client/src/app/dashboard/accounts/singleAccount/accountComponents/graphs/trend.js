import React from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useWindowSize from '../../../../../../hooks/resize.hook';

const AccountTrend = ({data}) => {
    const [width] = useWindowSize();

    return (
        <>
            {data && 
                <ResponsiveContainer debounce='1' width="100%" height={width > 400 ?  400 : width / 1.5} >
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