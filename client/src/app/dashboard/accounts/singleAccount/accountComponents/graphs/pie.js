import React, { useState, useEffect } from 'react';
import {ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import renderActiveShape from './activeShape';

import useWindowSize from '../../../../../../hooks/resize.hook';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AccountPie = ({currency, data}) => {
    const [index, setIndex] = useState(0);
    const [width] = useWindowSize();

    const onPieEnter = (data, index) => setIndex(index);

    const handleRadius = () => {
        
    }

    useEffect(() => {
        handleRadius();
    }, [handleRadius]);

    return (
        <div className="account-pie">
            {data && 
                <ResponsiveContainer width={'100%'} height={400} >
                    <PieChart>
                        <Pie 
                            activeIndex={index}
                            activeShape={renderActiveShape}
                            isAnimationActive={true} 
                            data={data} 
                            cx={'50%'} 
                            cy={'50%'} 
                            innerRadius={100}
                            outerRadius={120}
                            dataKey="spending"
                            fill="#8884d8"
                            onMouseEnter={onPieEnter}
                        >
                            {
                                data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                            }
                            </Pie>
                    </PieChart>
                </ResponsiveContainer>
            }
        </div>
    );
}
 
export default AccountPie;