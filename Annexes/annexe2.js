const SecondAnnexeSolution = (date_start, date_end) => {
	checkDate(date_start);
	return "Consider this one is also DONE";
}

// Check if the first date is provided
const checkDate = date => {
	if (!date) {
		return "Sorry, The first paramter is mandatory"
	}
	if (date instanceof Date) {
		return "This is not a date variable";
	}
}