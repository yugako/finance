import React from 'react';

import { useAPI } from '../../../context/DataContext';

import ActivityList from './activityList';

const Activity = () => {

    const { activities } = useAPI();

    return (
        
        <>  
            {activities && <ActivityList activities={activities} /> }         
        </>
        
    );
}
 
export default Activity;