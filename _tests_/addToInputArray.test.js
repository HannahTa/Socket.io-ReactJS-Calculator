const addToInputArray = require('../src/core/addToInputArray');

test("display.output is an empty string. Adding ouput, input array should be an empty array", () => {
  let display = {
    output: '',
    inputArray: []
  }
  let displayOutput = addToInputArray(display, '');
  expect(displayOutput.inputArray).toEqual([]);
});

test("display.output is an empty string. Adding ouput, when input array already equals ['1', '*']. inputArray should equals ['1', '*']", () => {
  let display = {
    output: '',
    inputArray: ['1', '*']
  }
  let displayOutput = addToInputArray(display, '');
  expect(displayOutput.inputArray).toEqual(['1', '*']);
});

test("display.output is '23'. Adding ouput, when input array is an empty array. inputArray should equals ['23']", () => {
  let display = {
    output: '',
    inputArray: []
  }
  let displayOutput = addToInputArray(display, '23');
  expect(displayOutput.inputArray).toEqual(['23']);
});

test("display.output is '9'. Adding ouput, when input array already equals ['7', '-']. inputArray should equals ['7', '-', '9']", () => {
  let display = {
    output: '',
    inputArray: ['7', '-']
  }
  let displayOutput = addToInputArray(display, '9');
  expect(displayOutput.inputArray).toEqual(['7', '-', '9']);
});

test("display.output is '+'. Adding ouput, when input array already equals ['0']. inputArray should equals ['0', '+']", () => {
  let display = {
    output: '',
    inputArray: ['0']
  }
  let displayOutput = addToInputArray(display, '+');
  expect(displayOutput.inputArray).toEqual(['0', '+']);
});

// Need to handle minus numbers?