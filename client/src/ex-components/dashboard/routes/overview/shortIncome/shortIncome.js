import React from 'react';

import './SingleIncome.scss';
import OverviewTitle from "../components/OverviewTitle";
import SingleIncome from "./SingleIncome";

export default () => {
    return(
        <div className='income-overview mb-5'>
            <OverviewTitle
                title='Income'
                link='/income'
            />

            <SingleIncome
                title={'Finance incomes'}
                amount={'750'}
                source={'Wallet'}
                date={'12.02.19'}
                icon='fas fa-university'
            />
            <SingleIncome
                title={'Other'}
                amount={'5302'}
                source={'Wallet'}
                date={'09.02.19'}
                icon={'fas fa-money-bill-wave'}
            />
            <SingleIncome
                title={'One job'}
                amount={'3000'}
                source={'Wallet'}
                date={'50000'}
                icon={'fas fa-wallet'}
            />
            <SingleIncome
                title={'Salary'}
                amount={'12000'}
                source={'Wallet'}
                date={'27.01.19'}
                icon={'fas fa-money-check-alt'}
            />
        </div>
    );
}