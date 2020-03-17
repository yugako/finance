import { _ } from 'underscore';

const dayProgress = (data) => {
	if(data) {
		
		const groupedByDate =_.groupBy(data, 'date');
		let daysArr = [];

		for (let key in groupedByDate) {
			daysArr.push(groupedByDate[key]);
		}
		
		const lastDaysBalance = daysArr[daysArr.length - 1 ];
		const daysBeforeLastBalance = daysArr[daysArr.length - 2];
		
		
		function averageBalance (data) {
			const summaryBalance = data.reduce((a,c) => a + c.averageBalance, 0);

		
			return summaryBalance / data.length;
		}

		const plotData = [
			{
				date: lastDaysBalance[0].date,
				averageBalance: averageBalance(lastDaysBalance),
			},
			{
				date: daysBeforeLastBalance[0].date,
				averageBalance: averageBalance(daysBeforeLastBalance),
			},

		];

		const percentProgress = ((plotData[0].averageBalance / plotData[1].averageBalance) * 100 - 100).toFixed(2);
		
		return {
			plotData: plotData.reverse(), percentProgress
		}
		
	}
};

const weekProgress = (data) => {
	// console.log(data);

	// 604800000
	const lastDay = +data[data.length - 1].sortDate;

	const weekActivities = data.reverse().filter(d => (lastDay - +d.sortDate) < 604800000);
	const percentProgress = ((weekActivities[0].averageBalance / weekActivities[weekActivities.length - 1].averageBalance) * 100 - 100).toFixed(2);

	console.log(weekActivities);

	
	return {
		plotData: weekActivities.reverse(),
		percentProgress
	}
};

const monthProgress = (data) => {
	console.log('month', data);
};

const fullProgress = (data, initBalance) => {
	console.log(data, initBalance);

	const percentProgress = ((data[data.length - 1].averageBalance / initBalance) * 100 - 100).toFixed(2);
	
	return {
		plotData: data,
		percentProgress
	}
};

const toogleProgress = (period, data, initBalance = 1) => {
	let returnedData  = null;
	switch(period) {
		case 'day':
			returnedData = dayProgress(data);
			break;
		case 'week':
			returnedData = weekProgress(data);
			break;
		case 'month':
			returnedData = period;
			break;
		case 'full':
			returnedData = fullProgress(data, initBalance);
			break;
		default:
			returnedData = fullProgress(data, initBalance);
			break;
	}

	return returnedData;
}

export default toogleProgress;