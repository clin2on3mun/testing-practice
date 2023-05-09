const reverseString = require('./reverseString');

test('check if string is reverse', () => {
  expect(reverseString('hope')).toBe('epoh');
});