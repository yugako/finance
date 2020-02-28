import React, { useState, useContext, useEffect, createContext } from 'react';

import { useHttp } from '../hooks/http.hook';
import { AuthContext } from './AuthContext';

const APIContext = createContext();

export const APIContextProvider = ({children}) => {
	const [accounts, setAccounts] = useState();
	const [activities, setActivity] = useState();

	const {loading, request} = useHttp();

	const {token} = useContext(AuthContext);

	useEffect(() => {
	    const fetchAccounts = async () => {
	    	try {
		        const accountsList = await request('/api/account', 'GET', null, {
		            Authorization: `Bearer ${token}`
		        });

		        const activityList = await request('/api/activity', 'GET', null, {
	                Authorization: `Bearer ${token}`
	            });

		        setAccounts(accountsList);
		        setActivity(activityList);

		    } catch (e) {}
	    }

	    fetchAccounts();
	}, []);

	return (
	    <APIContext.Provider
	      	// Add required values to the value prop within an object (my preference)
	      	value={{
	        	accounts, activities
	      	}}
	    >
	      	{children}
	    </APIContext.Provider>
  	);
}

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
  const context = useContext(APIContext);

  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }

  return context;
}