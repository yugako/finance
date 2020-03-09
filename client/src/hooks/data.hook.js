import {useContext, useCallback } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

export const useData = () => {
	const {loading, request} = useHttp();
	const {token} = useContext(AuthContext);
	// Get data list
	const fetchDataList = useCallback(async (dataType) => {
    	try {
            const data = await request(`/api/${dataType}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });

	        return data;
	    } catch (e) {
	    	console.log(e);
	    }
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

	// Update single data

	const updateSingleData = useCallback(async (dataType, dataId, dataBody) => {
		try {
			const update = await request(`/api/${dataType}/${dataId}`, 'PUT', dataBody, {
                Authorization: `Bearer ${token}`
        	});

        	return update;
		} catch (e) {
			console.log(e);
		}
	}, [token, request]);

	// Create data

	const createData = useCallback(async (dataRoute, dataBody) => {
		try {

			await request(`/api/${dataRoute}`, 'POST', dataBody, {
                Authorization: `Bearer ${token}`
            });

		} catch (e) {
			console.log(e);
		}
	}, [token, request]);


	
    return { fetchDataList, fetchDataSingle, updateSingleData, createData };
}