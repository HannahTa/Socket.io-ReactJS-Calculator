const addToOutput = require('../src/core/addToOutput');

test("display.output is an empty string. Adding '2' will make it '2'", () => {
  let display = {
    output: '',
    inputArray: []
  }
  let displayOutput = addToOutput(display, '2');
  expect(displayOutput.output).toBe('2');
});

test("display.output is an '9'. Adding '5' will make it '95'", () => {
  let display = {
    output: '9',
    inputArray: []
  }
  let displayOutput = addToOutput(display, '5');
  expect(displayOutput.output).toBe('95');
});

test("display.output is an empty string. Adding 6 will make it '6'", () => {
  let display = {
    output: '',
    inputArray: []
  }
  let displayOutput = addToOutput(display, 6);
  expect(displayOutput.output).toBe('6');
});

test("display.output is an '3'. Adding 1 will make it '31'", () => {
  let display = {
    output: '3',
    inputArray: []
  }
  let displayOutput = addToOutput(display, 1);
  expect(displayOutput.output).toBe('31');
});