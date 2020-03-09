import React, { useState, useCallback, useEffect } from 'react';

import { useData } from '../../../hooks/data.hook';

import Loader from '../../../components/elements/Loader';
import ActivityList from './activityList';

const Activity = () => {
	const [activities, setActivities] = useState();
    const {fetchDataList} = useData();

    const getActivities = useCallback(async () => {
        const actvityList = await fetchDataList('activity');

        setActivities(actvityList);
    }, []);

    useEffect(() => {
        getActivities()
    }, [getActivities]);

    if(!activities) {
        return (
            <Loader />
        )
    }

    return (
       <ActivityList activities={activities} />
    );
}
 
export default Activity;