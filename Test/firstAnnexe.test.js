const expect = require('chai').expect;
const assert = require('assert');

const firstAnnexe = require('../Annexes/annexe1');

describe('Testing the first annexe', () => {
	it('Should return division of the length of our string by the given number', () => {
		const str = 'This is a test';
		const nbr = 2;

		const annexeSolution = firstAnnexe.FirstAnnexeSolution(str, nbr);
		const realSolution = str.length / nbr;
		assert.strictEqual(annexeSolution, realSolution);
	})

	it('Should return division of the length of our string by the given number', () => {
		const str = 'This is a test';
		const nbr = 18;

		const annexeSolution = firstAnnexe.FirstAnnexeSolution(str, nbr);
		const realSolution = str.length / nbr;
		assert.strictEqual(annexeSolution, realSolution);
	})

	it('Should throw an errror', () => {
		const str = 'This is a test';
		const nbr = 21;

		const annexeSolution = firstAnnexe.FirstAnnexeSolution(str, nbr);
		const realSolution = str.length / nbr;
		assert.notStrictEqual(annexeSolution, realSolution);
	})

	it('Should throw an errror', () => {
		const str = 'This is a test';
		const nbr = 0;

		const annexeSolution = firstAnnexe.FirstAnnexeSolution(str, nbr);
		const realSolution = str.length / nbr;

		assert.notStrictEqual(annexeSolution, realSolution);
	})

	it('Missing parameter should also throw an error', () => {
		const str = 'This is a test';
		const nbr = 0;

		const annexeSolution = firstAnnexe.FirstAnnexeSolution(str);
		const realSolution = str.length / nbr;

		assert.notStrictEqual(annexeSolution, realSolution);
	})

	it('Missing parameter should also throw an error', () => {
		const str = 'This is a test';
		const nbr = 0;

		const annexeSolution = firstAnnexe.FirstAnnexeSolution(nbr);
		const realSolution = str.length / nbr;

		assert.notStrictEqual(annexeSolution, realSolution);
	})
})
