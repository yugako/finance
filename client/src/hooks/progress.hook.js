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
			plotData: plotData.reverse(), 
			percentProgress: `${percentProgress}%`,
			label: 'from yesterday'
		}
		
	}
};

const weekProgress = (data) => {
	const lastDay = +data[data.length - 1].sortDate;

	const weekActivities = data.reverse().filter(d => (lastDay - +d.sortDate) < 604800000);
	const percentProgress = ((weekActivities[0].averageBalance / weekActivities[weekActivities.length - 1].averageBalance) * 100 - 100).toFixed(2);

	return {
		plotData: weekActivities.reverse(),
		percentProgress: `${percentProgress}%`,
		label: 'from last week'
	}
};

const monthProgress = (data) => {
	const lastDay = +data[data.length - 1].sortDate;

	const monthActivities = data.reverse().filter(d => (lastDay - +d.sortDate) < 604800000 * 4);
	const percentProgress = ((monthActivities[0].averageBalance / monthActivities[monthActivities.length - 1].averageBalance) * 100 - 100).toFixed(2);
	
	return {
		plotData: monthActivities.reverse(),
		percentProgress: `${percentProgress}%`,
		label: 'from last month'
	}
};

const fullProgress = (data, initBalance) => {
	const percentProgress = ((data[data.length - 1].averageBalance / initBalance) * 100 - 100).toFixed(2);
	
	return {
		plotData: data,
		percentProgress: `${percentProgress}%`,
		label: 'from past period'
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
			returnedData = monthProgress(data);
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