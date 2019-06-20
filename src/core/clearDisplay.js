const clearDisplay = (display) => {
  display.output = '';
  display.inputArray = [];
  return display;
  // return {
  //   output: '',
  //   inputArray: []
  // };
}

module.exports = clearDisplay;