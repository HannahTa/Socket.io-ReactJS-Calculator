const clearOutput = require('./clearOutput');
const clearDisplay = require('./clearDisplay');
const addToOutput = require('./addToOutput');
const addOutputToInputArray = require('./addOutputToInputArray');
const addToInputArray = require('./addToInputArray');
const calculate = require('./calculate');
const backspace = require('./backspace');

const handleInput = (display, value) => {
  const isLastInputEquals = display.inputArray[display.inputArray.length - 1] === '=';
  const isNumber = Number.isInteger(parseInt(value));
  const isSymbol = ['+', '-', '*', '/', '='].includes(value);
  const isEquals = value === '=';
  const isCE = value === 'CE';
  const isC = value === 'C';
  const isBackspace = value === '<';

  if (isBackspace) return display = backspace(display);
  if (isCE) return display = clearOutput(display);
  if (isC) return display = clearDisplay(display);
  if (isLastInputEquals) display = clearDisplay(display);
  if (isNumber) display = addToOutput(display, value);
  if (isSymbol) {
    display = addOutputToInputArray(display);
    display = addToInputArray(display, value);
  }
  if (isEquals) display = calculate(display);

  return display;
}

module.exports = handleInput;