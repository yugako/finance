<<<<<<< HEAD
import { useState, useContext, useCallback, useEffect, createContext } from 'react';
=======
import {useContext, useCallback } from 'react';
>>>>>>> 748041eba31ec3f6b9ad5e6449bdabff2885d86b

import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

export const useData = () => {
	const {loading, request} = useHttp();
	const {token} = useContext(AuthContext);
	
<<<<<<< HEAD
	const fetchData = async (dataType) => {
    	try {
	        // const accountsList = await request('/api/account', 'GET', null, {
	        //     Authorization: `Bearer ${token}`
	        // });

	        // const activityList = await request('/api/activity', 'GET', null, {
         //        Authorization: `Bearer ${token}`
         //    });
=======
	// Get data list
	const fetchDataList = useCallback(async (dataType) => {
    	try {
>>>>>>> 748041eba31ec3f6b9ad5e6449bdabff2885d86b

            const data = await request(`/api/${dataType}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });

	        return data;
	       
	        
	    } catch (e) {
	    	console.log(e);
	    }
<<<<<<< HEAD
    };

	

    return { fetchData };
=======
    }, [token,request]);

    // Get single data
	const fetchDataSingle = useCallback(async (dataType, dataId) => {
		try {

            const data = await request(`/api/${dataType}/${dataId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });

	        return data;
	    } catch (e) {
	    	console.log(e);
	    }
	}, [token, request]);
	
    return { fetchDataList, fetchDataSingle };
>>>>>>> 748041eba31ec3f6b9ad5e6449bdabff2885d86b
}