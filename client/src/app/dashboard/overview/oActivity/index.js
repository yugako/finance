import React, {useState, useEffect, useCallback} from 'react';
import {NavLink} from 'react-router-dom';

import { useData } from '../../../../hooks/data.hook';

import ActivitySingle from './oActivitySingle';
import ActivityEmpty from './oActivityEmpty';

import './index.scss';

const OverviewActivity = () => {
    const { fetchDataList } = useData();
    const [activities, setActivities] = useState();

    const getActivities = useCallback(async () => {
        try {
            const activities = await fetchDataList('activity');
        } catch (e) {
            console.log(e);
        }
    }, []);

    useEffect(() => {
        getActivities();
    }, [getActivities]);


    return (
        <div className='dashboard-overview__activity'>
            <div className="dashboard-overview__activity-header d-flex justify-content-between">
                <div className="dashboard-overview__activity-title">
                    Activity
                </div>
            </div>
            <div className="dashboard-overview__activity-list">
                {activities
                    ? activities.map( activity => 
                        <ActivitySingle
                            title={activity.activityName} 
                            date={activity.activityDate}
                            amount={activity.activitySpendings}
                            account={activity.accountName} 
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