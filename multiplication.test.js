const multiply = require('./multiplication');
test('subtracts 20 * 2 to equal 40', () => {
   expect(multiply(20, 2)).toBe(40);
});

test('multiplies 5 * 1 to equal 5', () => {
    expect(multiply(5, 1)).toBe(5);
 });