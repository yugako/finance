import React from 'react';
import ActivitySingle from '../../../../components/dashboard/activitySingle';

const activities = [
    {
        icon: 'fas fa-utensils',
        title: 'Serv Einsten Pub - Piata Mica',
        date: '26 July 2019, 11:08 PM',
        amount: ' +2313.5', 
        currency: 'EUR', 
        account: 'RO41 BUCU 0623 4675 6450 RON',
    },
    {
        icon: 'fas fa-pizza-slice',
        title: 'Fast Food Yummy Yang',
        date: '27 July 2019, 3:39 PM',
        amount: '-26', 
        currency: 'EUR', 
        account: 'DE89 3704 0044 0532 0130 00',
    },
    {
        icon: 'fas fa-money-bill',
        title: 'Conversion from EUR to RON',
        date: '28 July 2019',
        amount: '+400', 
        currency: 'EUR', 
        account: 'RO73 BUCU 0623 0545 0883',
    },
    {
        icon: 'fas fa-utensils',
        title: 'Rc146 Rompetrol Sibi',
        date: '30 July 2019, 3:39 PM',
        amount: '-450', 
        currency: 'EUR', 
        account: 'DE89 3704 0044 0532 0130 00',
    },
    {
        icon: 'fas fa-drumstick-bite',
        title: 'Fast Food Yummy Yang',
        date: '31 July 2019, 3:39 PM',
        amount: '-38', 
        currency: 'EUR', 
        account: 'RO73 BUCU 0623 0545 0883',
    },
]

const OverviewActivity = () => {
    return (
        <div className='dashboard-overview__activity'>
            <div className="dashboard-overview__activity-header d-flex justify-content-between">
                <div className="dashboard-overview__activity-title">
                    Activity
                </div>
                <div className="dashboard-overview__activity-options">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <div className="dashboard-overview__activity-list">
                {activities.map(
                    activity => 
                    <ActivitySingle
                        icon={activity.icon} 
                        title={activity.title} 
                        date={activity.date}
                        amount={activity.amount}
                        currency={activity.currency}
                        account={activity.account} 
                        key={activity.title} 
                    />
                )}
            </div>
            <button className="dashboard-overview__activity-more">
                Load More
            </button>
            
            
        </div>
    );
}
 
export default OverviewActivity;