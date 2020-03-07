import React, {useState, useEffect, useCallback} from 'react';

import {useHttp} from '../../../../hooks/http.hook';
import Select from '../../../../components/elements/Forms/select';

import WelcomeWrapper from '../../../../components/dashboard/welcome/wrapper';

const BaseCurrency = () => {
	const [currencyList, setCurrencyList] = useState();
	const {loading,request} = useHttp();

	const getCurrencyList = useCallback(async () => {
		try {
			const data = await request(`http://localeplanet.com/api/auto/currencymap.json?name=Y`, 'GET', null, {});

			setCurrencyList(JSON.parse(data));
		} catch (e) {	
			console.log(e);
		}
	}, [request]);

	useEffect(() => {
		getCurrencyList();
	}, [getCurrencyList]);


	return (
		<WelcomeWrapper>
			<section>
				{console.log(currencyList)}
			</section>
		</WelcomeWrapper>
		
	);
}

export default BaseCurrency;