const arthimetic = require('./simplecalculator');

describe('simpleCalculator', () => {
  test('addition', () => {
    expect(arthimetic.add()).toBe(6);
  });
  test('subtract', () => {
    expect(arthimetic.subtract()).toBe(2);
  });
  test('division', () => {
    expect(arthimetic.division()).toBe(2);
  });
  test('multiplication', () => {
    expect(arthimetic.multiplication()).toBe(8);
  });
});