import React from 'react';
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(2)}%`}
        </text>
    );
};

const CustomTooltip = ({active, payload}) => {
    console.log(active);

    if(active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].payload.payload.type} : ${payload[0].value}`}</p>
                <p className="intro">Text</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
    
}

const AccountPie = ({data}) => {
    return (
        <div className="account-pie">
            {console.log(data)}
            {data && 
                <ResponsiveContainer width="100%" height={400} >
                    <PieChart>
                        <Pie
                            data={data} 
                            cx={'50%'} 
                            cy={'50%'} 
                            labelLine={true}
                            // label={renderCustomizedLabel}
                            label={'type'}
                            outerRadius={200} 
                            fill="#8884d8"
                            dataKey="spending"
                        >
                            {
                                data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                            }
                        
                        </Pie>
                        <Tooltip content={<CustomTooltip/>}/>
                    </PieChart>
                </ResponsiveContainer>
            }
        </div>
    );
}
 
export default AccountPie;