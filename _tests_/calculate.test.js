const calculate = require('../src/core/calculate');

test("inputArray: ['1', '+', '2', '='] equals 3", () => {
  let display = {
    output: '',
    inputArray: ['1', '+', '2', '=']
  }
  let displayOutput = calculate(display);
  expect(displayOutput.output).toBe('3');
});

test("inputArray: ['5', '-', '1', '='] equals 4", () => {
  let display = {
    output: '',
    inputArray: ['5', '-', '1', '=']
  }
  let displayOutput = calculate(display);
  expect(displayOutput.output).toBe('4');
});

test("inputArray: ['3', '*', '2', '='] equals 6", () => {
  let display = {
    output: '',
    inputArray: ['3', '*', '2', '=']
  }
  let displayOutput = calculate(display);
  expect(displayOutput.output).toBe('6');
});

test("inputArray: ['10', '/', '5', '='] equals 2", () => {
  let display = {
    output: '',
    inputArray: ['10', '/', '5', '=']
  }
  let displayOutput = calculate(display);
  expect(displayOutput.output).toBe('2');
});

test("inputArray: ['4', '+', '6', '-', '5', '='] equals 5", () => {
  let display = {
    output: '',
    inputArray: ['4', '+', '6', '-', '5', '=']
  }
  let displayOutput = calculate(display);
  expect(displayOutput.output).toBe('5');
});

test("inputArray: ['2', '*', '2', '*', '2', '*', '2', '='] equals 16", () => {
  let display = {
    output: '',
    inputArray: ['2', '*', '2', '*', '2', '*', '2', '=']
  }
  let displayOutput = calculate(display);
  expect(displayOutput.output).toBe('16');
});

test("inputArray: ['+', '2', '='] equals Error", () => {
  let display = {
    output: '',
    inputArray: ['+', '2', '=']
  }
  let displayOutput = calculate(display);
  expect(displayOutput.output).toBe('Error');
});

test("inputArray: ['='] equals Error", () => {
  let display = {
    output: '',
    inputArray: ['=']
  }
  let displayOutput = calculate(display);
  expect(displayOutput.output).toBe('Error');
});

test("inputArray: ['6', '+', '='] equals Error", () => {
  let display = {
    output: '',
    inputArray: ['6', '+', '=']
  }
  let displayOutput = calculate(display);
  expect(displayOutput.output).toBe('Error');
});

// test("inputArray: ['='] equals Error", () => {
//   var inputArray = ['1', '+', '1'];
//   expect(calculate(inputArray)).toBe('0');
// });

// test("inputArray: ['='] equals Error", () => {
//   var inputArray = ['1', '1'];
//   expect(calculate(inputArray)).toBe('0');
// });