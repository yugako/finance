import React, { useState, useContext, useCallback, useEffect } from 'react';

import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import Loader from '../../../components/elements/Loader';
import ActivityList from './activityList';

const Activity = () => {
    const [activityList, setActivityList] = useState();
    const {loading, request} = useHttp();

    const {token} = useContext(AuthContext);

    const fetchActivities = useCallback(async () => {
        try {
            const activityList = await request('/api/activity', 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setActivityList(activityList);
        } catch (e) {
            
        }
    }, [token, request]);

    useEffect(() => {
        fetchActivities();
    }, [fetchActivities]);

    if(loading) {
        return (
            <Loader />
        )
    }

    return (
        
        <>  
            { !loading && activityList && <ActivityList activities={activityList} /> }         
        </>
        
    );
}
 
export default Activity;