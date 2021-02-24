const FirstAnnexeSolution = (str, nbr) => {
	checkValidNumber(nbr);
	checkString(str);

	const strLength = str.length;
	return (strLength / nbr);
}

const checkValidNumber = (nbr) => {
	if (isNaN(nbr) || !nbr) {
		return "Sorry !! The number should be of type Number";
	}
	if (nbr < 0 || nbr > 20) {
		return "Sorry the number should be between 0 and 20";
	}
}

const checkString = (str) => {
	if (!str) {
		return "Sorry the string is mandatory";
	}
}

console.log(FirstAnnexeSolution("Hi", "32"));