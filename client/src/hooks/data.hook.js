import { useState, useContext, useCallback, useEffect, createContext } from 'react';

import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

export const useData = () => {
	const {loading, request} = useHttp();
	const {token} = useContext(AuthContext);
	
	// Get data list
	const fetchDataList = async (dataType) => {
    	try {

            const data = await request(`/api/${dataType}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });

	        return data;
	       
	        
	    } catch (e) {
	    	console.log(e);
	    }
    };

    // Get single data
	const fetchDataSingle = async (dataType, dataId) => {
		try {

            const data = await request(`/api/${dataType}/${dataId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });

	        return data;
	    } catch (e) {
	    	console.log(e);
	    }
	}
	
	

    return { fetchData, fetchDataSingle };
}