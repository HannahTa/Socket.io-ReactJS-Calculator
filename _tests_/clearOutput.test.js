const clearOutput = require('../src/core/clearOutput');

test("Only inputArray is filled, should still be there", () => {
  let display = {
    output: '',
    inputArray: ['1', '+', '2', '=']
  }
  let displayOutput = clearOutput(display);
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toBe(display.inputArray);
});

test("Only output is filled, should become an empty string", () => {
  let display = {
    output: '123',
    inputArray: []
  }
  let displayOutput = clearOutput(display);
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toBe(display.inputArray);
});

test("Whole of display is filled, output should be cleared, input array should still be there", () => {
  let display = {
    output: '123',
    inputArray: ['1', '+', '32']
  }
  let displayOutput = clearOutput(display);
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toBe(display.inputArray);
});
