const reverseString = require('./reverseString');

test('Take a string and returns it reversed.', () => {
  expect(reverseString('Hello')).toBe('olleH')
});

test('Take a complex string and returns it reversed.', () => {
  expect(reverseString('UmPhReY McGee & Crew')).toBe('werC & eeGcM YeRhPmU')
});

test('String Contains numbers', () => {
  expect(reverseString('Why Yes I Am 45')).toBe('54 mA I seY yhW')
});