import React, { useState } from 'react';
import {ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const renderActiveShape = ({cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, currency}) => {
    const RADIAN = Math.PI / 180;

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.type}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />

        <g className='text-label'>
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>

            <text className='text-label__main' 
                  x={ex + (cos >= 0 ? 1 : -1) * 12} 
                  y={ey} textAnchor={textAnchor} 
                  fill="#333">
                      <tspan className='text-label__main-title'>Total: </tspan>
                      <tspan className='text-label__main-value'>{value} </tspan>
                      <tspan className='text-label__main-currency'>{payload.currency}</tspan>
                      {/* {`Total: ${value} ${payload.currency}`}                  */}
            </text>

            <text className='text-label__percent' x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
        
      </g>
    );
  };

const AccountPie = ({currency, data}) => {
    const [index, setIndex] = useState(0);

    const onPieEnter = (data, index) => setIndex(index);

    return (
        <div className="account-pie">
            {console.log(data)}
            {data && 
                <ResponsiveContainer width="100%" height={400} >
                    <PieChart width={800} height={400}>
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