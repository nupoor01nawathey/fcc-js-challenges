const expect = require('expect');
const {sumAll} = require('./sumAllInRange');

describe('sumAll', () => {
    it('it should return sum of all numbers in the range', () => {
        const sumExpected = 10;
        const sumReal = sumAll([1, 4]);
        expect(typeof sumReal).toBe('number');
        expect(sumReal).toEqual(sumReal);
    });

    it('it should return sum of all numbers in the range', () => {
        const sumExpected = 45;
        const sumReal = sumAll([10, 5]);
        expect(typeof sumReal).toBe('number');
        expect(sumReal).toEqual(sumReal);
    });  
});