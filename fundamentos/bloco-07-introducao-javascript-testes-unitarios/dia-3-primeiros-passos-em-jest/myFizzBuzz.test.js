const myFizzBuzz = require('./myFizzBuzz');

describe('testa a função myFizzBuzz', () => {
    it ('deve retornar o resultado do FizzBuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(7)).toBe(7);
        expect(myFizzBuzz('n')).toBe(false);
    });
})