const capitalize = require('./capitalize');

test('return string with first letter capitalized ', () => {
  expect(capitalize('banana')).toMatch('Banana');
});