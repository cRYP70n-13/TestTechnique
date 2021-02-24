const FirstAnnexeSolution = (str, nbr) => {
	const validNum = checkValidNumber(nbr);
	const validStr = checkString(str);

	if (validNum === nbr && validStr === str && str !== undefined) {
		const strLength = str.length;
		return (strLength / nbr);
	} else {
		return
	}
}

const checkValidNumber = (nbr) => {
	if (isNaN(nbr) || !nbr) {
		return
	}
	if (nbr < 0 || nbr > 20) {
		return
	}
	return nbr;
}

const checkString = (str) => {
	if (!str) {
		return
	}
	return str;
}

module.exports = {
	FirstAnnexeSolution,
	checkString,
	checkValidNumber
}