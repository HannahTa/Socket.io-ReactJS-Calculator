const clearDisplay = require('../src/core/clearDisplay');

test("Only inputArray is filled, should become an empty array", () => {
  let display = {
    output: '',
    inputArray: ['1', '+', '2', '=']
  }
  let displayOutput = clearDisplay(display);
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toEqual([]);
});

test("Only output is filled, should become an empty string", () => {
  let display = {
    output: '123',
    inputArray: []
  }
  let displayOutput = clearDisplay(display);
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toEqual([]);
});

test("Both output and inputArray is filled, input should become an empty array, output should become and empty string", () => {
  let display = {
    output: '123',
    inputArray: ['1', '+', '2', '=']
  }
  let displayOutput = clearDisplay(display);
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toEqual([]);
});
