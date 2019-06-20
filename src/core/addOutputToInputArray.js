const addToInputArray = require('./addToInputArray');

const addOutputToInputArray = (display) => {
  addToInputArray(display, display.output);
  display.output = '';
  return display;
}

module.exports = addOutputToInputArray;