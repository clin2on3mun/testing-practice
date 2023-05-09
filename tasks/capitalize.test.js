let capitalize = require('./capitalize');

test('capitalize string', () => {
    expect(capitalize('umbrella')).toBe('Umbrella')
});