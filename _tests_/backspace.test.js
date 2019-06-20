const backspace = require('../src/core/backspace');

test("display.output is an '256'. Remove '6' will make it '25'", () => {
  let display = {
    output: '256',
    inputArray: []
  }
  let displayOutput = backspace(display);
  expect(displayOutput.output).toBe('25');
});

test("display.output is an empty string. Adding will return an empty string", () => {
  let display = {
    output: '',
    inputArray: []
  }
  let displayOutput = backspace(display);
  expect(displayOutput.output).toBe('');
});
