
const calculator = require('./calculator');

test('adds two numbers', () => {
    expect(calculator.add(2,2)).toBe(4);
});

test('subtracts a number from another', () => {
    expect(calculator.subtract(4, 3)).toBe(1);
});

test('subtraction works with negative results', () => {
  expect(calculator.subtract(10, 15)).toBe(-5);
});

test ('divides two mumbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
});

test ('catches division by zero', () => {
  expect(calculator.divide(5, 0)).toMatch(`Can't do that, boss.`);
});

test ('multiplies two numbers', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
});

test ('multiplication by zero', () => {
  expect(calculator.multiply(0, 6)).toBe(0);
});