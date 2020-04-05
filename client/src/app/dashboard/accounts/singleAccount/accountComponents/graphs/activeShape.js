import React from 'react';
import { Sector } from 'recharts';

const renderActiveShape = ({cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value}) => {
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