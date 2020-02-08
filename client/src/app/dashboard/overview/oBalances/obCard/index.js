import React from 'react';

const BalancesCard = ({title, money, currency}) => {
    return (
        <div className='balances-card'>
            <div className="balances-card__main">
                <div className="balances-card__header d-flex justify-content-between align-items-center">
                    <div className="balances-card__title">
                        {title}
                    </div>
                    <div className="balances-card__options">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div className="balances-card__content d-flex justify-content-between align-items-center">
                    <h2 className="balances-card__money">
                        {money}
                        <span className='currency'>{currency}</span>
                    </h2>
                    <div className="balances-card__progress">
                       <div className="balances-card__progress-percent">
                           +40%
                        </div>
                       <div className="balances-card__progress-period">
                            this week
                        </div> 
                    </div>
                </div>
            </div>
            <div className="balances-card__img">
                <img src={require('../../../../../assets/images/graph.png')} alt=""/>
            </div>
            

        </div> 
    );
}
 
export default BalancesCard;