const express = require('express');

const firstAnnexe = require('../Annexes/annexe1');

const router = express.Router();

router.get('/', (req, res, next) => {
	const { str, nbr } = req.query;
	const data = firstAnnexe.FirstAnnexeSolution(str, nbr);

	if (data) {
		res.status(200).json({
			success: true,
			data
		});
	} else {
		res.status(400).json({
			success: false,
			message: 'Sorry, You have an error in your parameters check them please'
		});
	}
})

module.exports = router;