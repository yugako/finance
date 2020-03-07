import React, { useState, useContext, useCallback, useEffect } from 'react';

import { useHttp } from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';
import Loader from '../../../../components/elements/Loader';
import ActivitySingle from './oActivitySingle';
import ActivityEmpty from './oActivityEmpty';

import { useData } from '../../../../hooks/data.hook';


import './index.scss';


const OverviewActivity = () => {
    const [activities, setActivities] = useState();
    const { loading, request } = useHttp();

    const { token } = useContext(AuthContext);

    const fetchActivities = useCallback(async () => {
        try {
            const activitiesList = await request('/api/activity', 'GET', null, {
                Authorization: `Bearer ${token}`
            });

            if(activitiesList.length) {
                setActivities(activitiesList);
            } else {
                setActivities(null);
            }
        } catch (e) {

        }
    }, [token, request]);

    useEffect(() => {
        fetchActivities()
    }, [fetchActivities]);

    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <div className='dashboard-overview__activity'>
            <div className="dashboard-overview__activity-header d-flex justify-content-between">
                <div className="dashboard-overview__activity-title">
                    Activity
                </div>
                <div className="dashboard-overview__activity-options">
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <div className="dashboard-overview__activity-list">
                {!loading && activities 
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
            {/* <button className="dashboard-overview__activity-more">
                Load More
            </button> */}
            
            
        </div>
    );
}
 
export default OverviewActivity;