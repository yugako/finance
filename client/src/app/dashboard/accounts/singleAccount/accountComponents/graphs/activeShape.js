import React from 'react';
import { Sector } from 'recharts';

const renderActiveShape = ({cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value}) => {
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
        <g>
          <text x={cx} y={cy} dy={-20} textAnchor="middle" fill={fill}>
            {payload.type}
            
          </text>
          <text className='text-label__main'  x={cx} y={cy} dy={0} textAnchor="middle" fill={fill}>
            <tspan className='text-label__main-title'>Total: </tspan>
            <tspan className='text-label__main-value'>{value} </tspan>
            <tspan className='text-label__main-currency'>{payload.currency}</tspan>
          </text>
          <text className='text-label__percent' x={cx} y={cy} dy={20} textAnchor={'middle'} fill="#999">
                {`(${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
        
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
      </g>
    );
  };

  export default renderActiveShape;