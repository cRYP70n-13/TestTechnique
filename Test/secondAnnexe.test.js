const expect = require('chai').expect;
const assert = require('assert');

const secondAnnexe = require('../Annexes/annexe2');

describe('Second annexe tests', () => {
	it('Should returns 15', () => {
		const date_start = '2020-06-10';
		const date_end = '2020-07-25';

		assert.strictEqual(secondAnnexe.SecondAnnexeSolution(date_start, date_end), 15);
	})

	it('Should returns 30', () => {
		const date_start = '2020-03-15';
		const date_end = '2020-04-14';

		console.log(secondAnnexe.SecondAnnexeSolution(date_start, date_end));
		assert.strictEqual(secondAnnexe.SecondAnnexeSolution(date_start, date_end), 30);
	})

	it('Should returns ', () => {
		const date_start = '2020-03-15';
		const date_end = '2020-04-14';

		assert.strictEqual(secondAnnexe.SecondAnnexeSolution(date_start, date_end), 30);
	})
})