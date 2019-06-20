const doMath = require('../src/core/doMath');

test("String: '1' '+' '2' = 3", () => {
  let total = doMath('1', '2', '+');
  expect(total).toBe(3);
});

test("Integer: 3 '+' 4 = 7", () => {
  let total = doMath(3, 4, '+');
  expect(total).toBe(7);
});

test("String: '3' '*' '2' = 6", () => {
  let total = doMath('3', '2', '*');
  expect(total).toBe(6);
});

test("Integer: 5 '*' 5 = 25", () => {
  let total = doMath(5, 5, '*');
  expect(total).toBe(25);
});

test("String: '10' '/' '0' = 0", () => {
  let total = doMath('10', '0', '*');
  expect(total).toBe(0);
});

test("Integer: 0 '/' 5 = 0", () => {
  let total = doMath(0, 5, '*');
  expect(total).toBe(0);
});

test("Integer: 10 '/' 2 = 5", () => {
  let total = doMath(10, 2, '/');
  expect(total).toBe(5);
});

test("String: '100' '-' '66' = 34", () => {
  let total = doMath('100', '66', '-');
  expect(total).toBe(34);
});

test("Integer: 69 '-' 15 = 54", () => {
  let total = doMath(69, 15, '-');
  expect(total).toBe(54);
});