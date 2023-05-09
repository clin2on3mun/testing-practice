const stringLength = require('./stringLength');

test('throw an error if string is greater than 10 and less than 1', () => {
    expect(stringLength('buss')).toBe(true)
});