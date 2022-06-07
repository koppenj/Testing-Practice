const caesarCipher = require('./caesarCipher');


test('implements cipher one letter shift', () => {
  expect(caesarCipher('test', 1)).toBe('uftu');
});

test('cipher works when setting cipher value', () => {
  expect(caesarCipher('test', 4)).toBe('xiwx');
});

test('cipher works with upper and lower case', () => {
  expect(caesarCipher('tEsT', 4)).toBe('xIwX');
});

test('cipher works with punctuation', () => {
  expect(caesarCipher('Ah!', 3)).toBe('Dk$');
});


test('cipher works when wrapping alphabet around z', () => {
  expect(caesarCipher('zoo', 6)).toMatch('fuu');
});
