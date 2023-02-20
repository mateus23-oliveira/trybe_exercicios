
// sum.js
const sum = (a, b) => a + b;
test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
  expect(sum(10, 3)).toEqual(13);

});

test('sums two values', () => {

    expect(sum(-3, 3)).toEqual(0);
    
  
})