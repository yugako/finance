import { _ } from 'underscore';

function getTime(time) {
	return new Date(time).getTime();
}

const dayProgress = (data, currentActivities) => {
	if(data) {
		
		console.log(currentActivities);
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
			plotData: plotData.reverse(), 
			percentProgress: `${percentProgress}%`,
			label: 'from yesterday',
			initPieData: [
				currentActivities[currentActivities.length-1], 
				currentActivities[currentActivities.length-2]
			]
		}
		
	}
};

const weekProgress = (data, currentActivities) => {
	const lastDay = +data[data.length - 1].sortDate;

	console.log(currentActivities);

	
	// sortDate: new Date(c.activityDate).getTime(),

	const weekActivities = data.reverse().filter(d => (lastDay - +d.sortDate) < 604800000);
	const weekActivitiesSpendings = currentActivities.filter(a => lastDay - +getTime(a.activityDate));
	const percentProgress = ((weekActivities[0].averageBalance / weekActivities[weekActivities.length - 1].averageBalance) * 100 - 100).toFixed(2);

	return {
		plotData: weekActivities.reverse(),
		percentProgress: `${percentProgress}%`,
		label: 'from last week',
		initPieData: weekActivitiesSpendings
	}
};

const monthProgress = (data, currentActivities) => {
	const lastDay = +data[data.length - 1].sortDate;

	const monthActivities = data.reverse().filter(d => (lastDay - +d.sortDate) < 604800000 * 4);
	const monthActivitiesSpendings = currentActivities.filter(a => lastDay - +getTime(a.activityDate));
	const percentProgress = ((monthActivities[0].averageBalance / monthActivities[monthActivities.length - 1].averageBalance) * 100 - 100).toFixed(2);
	
	return {
		plotData: monthActivities.reverse(),
		percentProgress: `${percentProgress}%`,
		label: 'from last month',
		initPieData: monthActivitiesSpendings
	}
};

const fullProgress = (data, initBalance, currentActivities) => {
	const percentProgress = ((data[data.length - 1].averageBalance / initBalance) * 100 - 100).toFixed(2);
	
	return {
		plotData: data,
		percentProgress: `${percentProgress}%`,
		label: 'from past period',
		initPieData: currentActivities
	}
};

const toogleProgress = (period, data, initBalance = 1, currentActivities) => {
	let returnedData  = null;
	
	switch(period) {
		case 'day':
			returnedData = dayProgress(data, currentActivities);
			break;
		case 'week':
			returnedData = weekProgress(data, currentActivities);
			break;
		case 'month':
			returnedData = monthProgress(data, currentActivities);
			break;
		case 'full':
			returnedData = fullProgress(data, initBalance, currentActivities);
			break;
		default:
			returnedData = fullProgress(data, initBalance, currentActivities);
			break;
	}

	return returnedData;
}

export default toogleProgress;