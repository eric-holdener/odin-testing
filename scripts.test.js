const scripts = require('./scripts');

test("capitalize capitalizes first letter", () => {
  expect(scripts.capitalize("hello")).toBe("Hello");
});

test("reverseString reverses strings", () => {
  expect(scripts.reverseString("world")).toBe("dlrow");
});

test("calculator sum adds two numbers", () => {
  expect(scripts.calculator.sum(1, 2)).toBe(3);
});

test("calculator subtract subtracts two numbers", () => {
  expect(scripts.calculator.subtract(5, 2)).toBe(3);
});

test("calculator multiply multiplies two numbers", () => {
  expect(scripts.calculator.multiply(6, 2)).toBe(12);
});

test("calculator divide divides two numbers", () => {
  expect(scripts.calculator.divide(6, 2)).toBe(3);
});