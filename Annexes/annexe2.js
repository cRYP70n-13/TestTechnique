const moment = require('moment');

const SecondAnnexeSolution = (date_start, date_end) => {
	const valid = checkDate(date_start) && checkDate(date_end);

	if (valid) {
		const extractFirstInfo = getDay(date_start);
		const extractSecondFInfo = getDay(date_end);

		const secondDate = {
			day: extractSecondFInfo[2],
			month: extractSecondFInfo[1],
			year: extractSecondFInfo[0]
		};

		const firstDate = {
			day: extractFirstInfo[2],
			month: extractFirstInfo[1],
			year: extractFirstInfo[0]
		};

		const secondMonthDays = daysInMonth(secondDate.month, firstDate.year);
		const timeDifference = (firstDate.day - 1) + (secondMonthDays - secondDate.day);

		return Math.abs(timeDifference);
	} else {
		return -1
	}
}

const checkDate = date => {
	return moment(date, 'YYYY-MM-DD').isValid();
}

const getDay = date => (date).split('-');

function daysInMonth(month, year) {
	return new Date(year, month, 0).getDate();
}

module.exports = {
	SecondAnnexeSolution
}