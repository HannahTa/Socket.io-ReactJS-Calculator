const handleInput = require('../src/core/handleInput');

test("Input: display.output = '', display.input = [], value = 8. Output: display.output = 8, display.inputArry = []", () => {
  let display = {
    output: '',
    inputArray: []
  }
  let displayOutput = handleInput(display, '8');
  expect(displayOutput.output).toBe('8');
  expect(displayOutput.inputArray).toEqual([]);
});

test("Input: display.output = 6, display.input = [], value = 4. Output: display.output = 64, display.inputArry = []", () => {
  let display = {
    output: '6',
    inputArray: []
  }
  let displayOutput = handleInput(display, '4');
  expect(displayOutput.output).toBe('64');
  expect(displayOutput.inputArray).toEqual([]);
});

test("Input: display.output = 12, display.input = [], value = 3. Output: display.output = 123, display.inputArry = []", () => {
  let display = {
    output: '12',
    inputArray: []
  }
  let displayOutput = handleInput(display, '3');
  expect(displayOutput.output).toBe('123');
  expect(displayOutput.inputArray).toEqual([]);
});

test("Input: display.output = 66, display.input = [], value = '+'. Output: display.output = '', display.inputArry = ['66', '+']", () => {
  let display = {
    output: '66',
    inputArray: []
  }
  let displayOutput = handleInput(display, '+');
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toEqual(['66', '+']);
});

test("Input: display.output = '', display.input = ['89', '/'], value = '5'. Output: display.output = '5', display.inputArry = ['89', '/']", () => {
  let display = {
    output: '',
    inputArray: ['89', '/']
  }
  let displayOutput = handleInput(display, '5');
  expect(displayOutput.output).toBe('5');
  expect(displayOutput.inputArray).toEqual(['89', '/']);
});

test("Input: display.output = '77', display.input = ['23', '+'], value = '='. Output: display.output = '100', display.inputArry = ['23', '+', '77', '=']", () => {
  let display = {
    output: '77',
    inputArray: ['23', '+']
  }
  let displayOutput = handleInput(display, '=');
  expect(displayOutput.output).toBe('100');
  expect(displayOutput.inputArray).toEqual(['23', '+', '77', '=']);
});

test("Input: display.output = '2', display.input = ['1', '+', '1', '='], value = '4'. Output: display.output = '4', display.inputArry = []", () => {
  let display = {
    output: '2',
    inputArray: ['1', '+', '1', '=']
  }
  let displayOutput = handleInput(display, '4');
  expect(displayOutput.output).toBe('4');
  expect(displayOutput.inputArray).toEqual([]);
});