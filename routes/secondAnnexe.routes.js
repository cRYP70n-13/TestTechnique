const express = require('express');

const secondAnnexe = require('../Annexes/annexe2');

const router = express.Router();

router.get('/', (req, res, next) => {
	const { date_start, date_end } = req.query;
	const data = secondAnnexe.SecondAnnexeSolution(date_start, date_end);

	if (data) {
		res.status(200).json({
			success: true,
			data
		});
	} else {
		res.status(400).json({
			success: false,
			message: 'Sorry, you have an error in yout dates'
		});
	}
});

module.exports = router;