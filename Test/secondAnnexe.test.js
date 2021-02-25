const expect = require('chai').expect;
const assert = require('assert');

const secondAnnexe = require('../Annexes/annexe2');

describe('Testing the Second annexe', () => {
	it('Should returns 15', () => {
		const date_start = '2020-06-10';
		const date_end = '2020-07-25';

		assert.strictEqual(secondAnnexe.SecondAnnexeSolution(date_start, date_end), 15);
	})

	it('Should returns 30', () => {
		const date_start = '2020-03-15';
		const date_end = '2020-04-14';

		assert.strictEqual(secondAnnexe.SecondAnnexeSolution(date_start, date_end), 30);
	})

	it('Should returns 41', () => {
		const date_start = '2020-01-20';
		const date_end = '2020-08-9';

		assert.strictEqual(secondAnnexe.SecondAnnexeSolution(date_start, date_end), 41);
	})

	it('Should Throw an error Missing parameter', () => {
		const date_end = '2020-08-9';

		assert.notStrictEqual(secondAnnexe.SecondAnnexeSolution(date_end), 41);
	})

	it('Should Throw an error Not a date paramter', () => {
		const date_end = '2020-08-9';
		const date_start = '20200202020';

		assert.notStrictEqual(secondAnnexe.SecondAnnexeSolution(date_start, date_end), "");
	})
})