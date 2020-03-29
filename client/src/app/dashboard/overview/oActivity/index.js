import React, {useState, useCallback, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import ActivitySingle from '../../../../components/dashboard/activitySingle';
import ActivityEmpty from './oActivityEmpty';

import { useData } from '../../../../hooks/data.hook';

import './index.scss';

const OverviewActivity = () => {
    const [activities, setActivities] = useState();
    const {fetchDataList} = useData();

    const getActivities = useCallback(async () => {
        const activitiesList = await fetchDataList('activity');

        setActivities(activitiesList);
    }, [fetchDataList]);

    useEffect(() => {
        getActivities()
    }, [getActivities]);


    return (
        <div className='dashboard-overview__activity'>
            <div className="dashboard-overview__activity-header d-flex justify-content-between">
                <div className="dashboard-overview__activity-title">
                    Activity
                </div>
            </div>
            <div className="dashboard-overview__activity-list">
                {activities && activities.length
                    ? activities.map( activity => 
                        <ActivitySingle
                            title={activity.activityName} 
                            date={activity.activityDate}
                            amount={activity.activitySpendings}
                            account={activity.accountName}
                            icon={activity.icon} 
                            key={activity._id} 
                        />
                    )
                    : <ActivityEmpty />
                }
            </div>
            {activities && activities.length
                ? <NavLink className='dashboard-overview__activity-more' to='/dashboard/activity'>View More</NavLink>
                : null
            }
            
        </div>
    );
}
 
export default OverviewActivity;