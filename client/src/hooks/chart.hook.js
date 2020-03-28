import { _ } from 'underscore';


const activitySpendingsBar = (activities, currency) => {
    if(activities) {
       
        const initialData = activities.map(a => {
            return {
                type: a.activityType,
                spending: Math.abs(+a.activitySpendings),
                currency
            }
        });

        const groupedData = _.groupBy(initialData, 'type');

        const finalData = [];

        for (const key in groupedData) {
            const element = groupedData[key];
            
            const spending = element.reduce((s, a) => {
                return s + parseInt(a.spending)
            }, 0) 

            finalData.push({
                type: key,
                spending: spending,
                currency: element[0].currency
            });
        }
         
        return finalData;
    }
}
export default activitySpendingsBar;