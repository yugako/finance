import { _ } from 'underscore';

const dayProgress = (data) => {
	if(data) {
		const groupedByDate =_.groupBy(data, 'displayDate');
		let daysArr = [];

		for (let key in groupedByDate) {
			daysArr.push(groupedByDate[key]);
		}
		
		const lastDaysBalance = daysArr[daysArr.length - 1 ];
		const daysBeforeLastBalance = daysArr[daysArr.length - 2];
		
		
		function averageBalance (data) {
			const summaryBalance = data.reduce((a,c) => a + c.currentBalance, 0);

		
			return summaryBalance / data.length;
		}

		const plotData = [
			{
				date: lastDaysBalance[0].displayDate,
				averageBalance: averageBalance(lastDaysBalance),
			},
			{
				date: daysBeforeLastBalance[0].displayDate,
				averageBalance: averageBalance(daysBeforeLastBalance),
			},

		];

		const percentProgress = ((plotData[0].averageBalance / plotData[1].averageBalance) * 100 - 100).toFixed(2);

		return {plotData, percentProgress};
	}
	
};

const weekProgress = (data) => {
	console.log('week', data);
};

const monthProgress = (data) => {
	console.log('month', data);
};

const fullProgress = (data) => {
	console.log('full', data);
};

const toogleProgress = (period, data) => {
	switch(period) {
		case 'day':
			dayProgress(data);
			break;
		case 'week':
			weekProgress(data);
			break;
		case 'month':
			monthProgress(data);
			break;
		case 'full':
			fullProgress(data);
			break;
		default:
			fullProgress(data);
			break;
	}
}

export default toogleProgress;