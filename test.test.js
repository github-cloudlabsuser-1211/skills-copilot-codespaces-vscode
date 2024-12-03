const Calculator = require('./test.js');

// FILE: test.test.js


describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should initialize with a result of 0', () => {
        expect(calc.getResult()).toBe(0);
    });

    test('should add a value to the result', () => {
        calc.add(5);
        expect(calc.getResult()).toBe(5);
    });

    test('should chain add operations', () => {
        calc.add(5).add(3);
        expect(calc.getResult()).toBe(8);
    });

    test('should return the calculator instance after add', () => {
        expect(calc.add(5)).toBe(calc);
    });
});