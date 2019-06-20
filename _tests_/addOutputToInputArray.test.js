const addOutputToInputArray = require('../src/core/addOutputToInputArray');

test("display.output is an empty string. Adding ouput, input array should be an empty array and displayOutput.output should be an empty string", () => {
  let display = {
    output: '',
    inputArray: []
  }
  let displayOutput = addOutputToInputArray(display);
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toEqual([]);
});

test("display.output is an empty string. Adding ouput, when input array already equals ['6', '+']. inputArray should equals ['1', '*'] and displayOutput.output should be an empty string", () => {
  let display = {
    output: '',
    inputArray: ['6', '+']
  }
  let displayOutput = addOutputToInputArray(display);
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toEqual(['6', '+']);
});

test("display.output is '5'. Adding ouput, when input array is an empty array. inputArray should equals ['5'] and displayOutput.output should be an empty string", () => {
  let display = {
    output: '5',
    inputArray: []
  }
  let displayOutput = addOutputToInputArray(display);
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toEqual(['5']);
});

test("display.output is '67'. Adding ouput, when input array already equals ['24', '*']. inputArray should equals ['24', '*', '67'] and displayOutput.output should be an empty string", () => {
  let display = {
    output: '67',
    inputArray: ['24', '*']
  }
  let displayOutput = addOutputToInputArray(display);
  expect(displayOutput.output).toBe('');
  expect(displayOutput.inputArray).toEqual(['24', '*', '67']);
});

// Need to handle minus numbers?