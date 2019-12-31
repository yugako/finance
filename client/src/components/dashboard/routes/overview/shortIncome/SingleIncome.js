import React from 'react';

export  default ({title, amount, source, date, icon}) => {
    return (
        <div className='income border p-3 rounded bg-success text-white mb-2'>
            <div className="income-icon">
                <i className={icon}></i>
            </div>
            <div className="income-data">
                <div className="income-data__row">
                    <div className="income-data__title">{title}</div>
                    <div className="income-data__amount font-weight-bold">{amount}$</div>
                </div>
                <div className="income-data__row">
                    <div className="income-data__source font-italic">
                        {source}
                    </div>
                    <div className="income-data__date">
                        {date}
                    </div>
                </div>

            </div>
        </div>
    )
}