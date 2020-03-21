import React from 'react';
import ActivitySingle from '../../../overview/oActivity/oActivitySingle';

const AccountActivity = ({activities}) => {
    return (
        <div className="account-activity">
                {activities && activities.length
                    ?
                        <div className="account-activity__list">
                            {activities.map(a => {
                                return (
                                    <ActivitySingle  key={a._id}
                                        title={a.activityName}
                                        date={a.activityDate}
                                        amount={a.activitySpendings}
                                        account={a.accountName}
                                    />  
                                );
                            })}
                        </div>
                    : 
                        <div>You don't have any activity for that account</div>
                }
            </div>
    );
}
 
export default AccountActivity;