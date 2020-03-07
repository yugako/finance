import React, {useState, useEffect, useCallback} from 'react';

import { useData } from '../../../hooks/data.hook';

import ActivityList from './activityList';

const Activity = () => {
    const { fetchDataList } = useData();
    const [activities, setActivities] = useState();

    const getActivities = useCallback(async () => {
    	try {
			const activities = await fetchDataList('activity');

			setActivities(activities);
    	} catch(e) {
    		console.log(e);
    	}
    }, []);

    useEffect(() => {
    	getActivities();
    }, [getActivities]);
	
    return (
        
        <>  
            {activities && <ActivityList activities={activities} /> }         
        </>
        
    );
}
 
export default Activity;