// myRemove.test.js

// myRemove.test.js
const { myRemove,  myFizzBuzz } = require('./myRemove.js');

describe('testa a função myRemove', () => {
  it('deve retornar um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    
  });
});


//const myFizzBuzz = require('./myRemove.js');

describe('testa a função myRemove', () => {
    it('retorna fizzBazz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
    
  })
});