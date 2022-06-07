const analyzeArray = require('./analyzeArray');
//  return object with average, min, max, and length.

/* test('returns an average', () => {
  const array = [1,2,3,4,5];
  expect(analyzeArray.average(array)).toBe(3);
});

test('returns min value', () => {
  const array = [1,2,3,4,5];
  expect(analyzeArray.min(array)).toBe(1);
});

test('returns max value', () => {
  const array = [1,2,3,4,5];
  expect(analyzeArray.max(array)).toBe(5);
});

test('returns array length', () => {
  const array = [22,1,2,3,4,5];
  expect(analyzeArray.length(array)).toBe(6);
}); */

test('returns object with all properties', () => {
  const array = [1,2,3,4,5];
  expect(analyzeArray(array)).toStrictEqual({
    'average': 3,
    'min': 1,
    'max': 5,
    'length':5
});
});
