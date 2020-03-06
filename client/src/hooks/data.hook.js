import { useState, useContext, useCallback, useEffect, createContext } from 'react';

import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

export const useData = () => {
	const {loading, request} = useHttp();
	const {token} = useContext(AuthContext);
	
	const fetchData = async (dataType) => {
    	try {
	        // const accountsList = await request('/api/account', 'GET', null, {
	        //     Authorization: `Bearer ${token}`
	        // });

	        // const activityList = await request('/api/activity', 'GET', null, {
         //        Authorization: `Bearer ${token}`
         //    });

            const data = await request(`/api/${dataType}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });

	        return data;
	       
	        
	    } catch (e) {
	    	console.log(e);
	    }
    };

	

    return { fetchData };
}