const addition = require('./addition');
test('adds 1 + 1 to equal 2', () => {
   expect(addition(1, 1)).toBe(2);
});

test('subtracts 5 + 5 to equal 10', () => {
    expect(addition(5, 5)).toBe(10);
 });