import React, {useState, useEffect, useCallback} from 'react';

import {useHttp} from '../../../../hooks/http.hook';
import WelcomeWrapper from '../../../../components/dashboard/welcome/wrapper';
import Loader from '../../../../components/elements/Loader';

import './index.scss';

const BaseCurrency = () => {
	const [currencyList, setCurrencyList] = useState();
	const {loading,request} = useHttp();

	const getCurrencyList = useCallback(async () => {
		try {
			const data = await request(`http://localeplanet.com/api/auto/currencymap.json?name=Y`, 'GET', null, {});

			const result = Object.keys(data).map(function (key) {
			   return { ...data[key] };
			});
			
			setCurrencyList(result);
		} catch (e) {	
			console.log(e);
		}
	}, [request]);

	useEffect(() => {
		getCurrencyList();
	}, [getCurrencyList]);

	if (!currencyList) {
		return <Loader />
	}

	return (
		<WelcomeWrapper>
			<section class='dashboard-welcome__currency'>
				{console.log(currencyList)}
				<div className="form-group">
		            <select value={currencyList[0].name}  name='currency' >
		                {currencyList.map((c,index) => {
		                    return <option key={index} value={c.symbol}>{c.name}</option>
		                })}
		            </select>
		            <label htmlFor="select" className="control-label">Set base currency</label>
		            <i className="bar"></i>
		        </div>
			</section>
			
		</WelcomeWrapper>
		
	);
}

export default BaseCurrency;