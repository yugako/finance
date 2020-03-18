import React from 'react';
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const AccountPie = ({data}) => {
    return (
        <div className="account-pie">
            {data && 
                <ResponsiveContainer width="100%" height={400} >
                    <PieChart>
                        <Pie
                            data={data} 
                            cx={'50%'} 
                            cy={'50%'} 
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={150} 
                            fill="#8884d8"
                            dataKey="averageBalance"
                        >
                            {
                                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                            }
                        
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            }
        </div>
    );
}
 
export default AccountPie;