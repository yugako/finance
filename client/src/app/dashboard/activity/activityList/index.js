import React from 'react';
import PropTypes from 'prop-types';

import Headline from '../../../../components/dashboard/headline';
import ActivitySingle from '../../../../components/dashboard/activitySingle';

const ActivityList = ({activities}) => {
    return (
        <section className='dashboard-activity'>
            <Headline title='Activities' />
            <div className="dashboard-activity__list">
                {activities.map(a => {
                    
                    return (
                        <ActivitySingle  key={a._id}
                            activityID={a._id}
                            title={a.activityName}
                            date={a.activityDate}
                            amount={a.activitySpendings}
                            account={a.accountName}
                            icon={a.icon}
                            activityType={a.activityType}
                        />  
                    );
                })}
            </div>
        </section>
    );
}

ActivityList.propTypes = {
    activities: PropTypes.array
};
 
export default ActivityList;