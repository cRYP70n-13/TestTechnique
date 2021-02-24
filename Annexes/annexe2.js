const moment = require('moment');

const SecondAnnexeSolution = (date_start, date_end) => {
	const valid = checkDate(date_start) && checkDate(date_end);

	if (valid) {
		// Extract informations from my dates
		const extractFirstInfo = getInfo(date_start);
		const extractSecondFInfo = getInfo(date_end);

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

		// Calculate the nums of days in the given months and the wanted result
		const secondMonthDays = daysInMonth(secondDate.month, firstDate.year);
		const timeDifference = (firstDate.day - 1) + (secondMonthDays - secondDate.day);

		return timeDifference;
	} else {
		return -1
	}
}

// Check if the given date is valid
const checkDate = date => {
	return moment(date, 'YYYY-MM-DD').isValid();
}

const getInfo = date => (date).split('-');

function daysInMonth(month, year) {
	return new Date(year, month, 0).getDate();
}

module.exports = {
	SecondAnnexeSolution
}