const encode = require('./encode');
const decode = require('./encode');

describe('testa a função encode/decode', () => {
    it ('a funçao encode é definida', () => {
        expect(encode).toBeDefined();
    });
    it ('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    it ('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    it ('decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });
    it ('retorna o resultado correto de enconde', () => {
        expect(encode('aeiou')).toEqual('12345');
    });
})