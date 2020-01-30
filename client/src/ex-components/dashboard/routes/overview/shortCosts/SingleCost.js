import React from 'react';

export  default ({title, amount, source, date, icon}) => {
    return (
        <div className='cost border p-3 rounded bg-danger text-white mb-2'>
            <div className="cost-icon">
                <i className={icon}></i>
            </div>
            <div className="cost-data">
                <div className="cost-data__row">
                    <div className="cost-data__title">{title}</div>
                    <div className="cost-data__amount font-weight-bold">{amount}$</div>
                </div>
                <div className="cost-data__row">
                    <div className="cost-data__source font-italic">
                        {source}
                    </div>
                    <div className="cost-data__date">
                        {date}
                    </div>
                </div>

            </div>
        </div>
    )
}