const doMath = require('./doMath');

function calculate(display) {
  var total;
  var currentSymbol;
  
  for(var i = 0; i < display.inputArray.length; i++) {
    var isNumber = Number.isInteger(parseInt(display.inputArray[i]));
    var lastInputIsNumber = Number.isInteger(parseInt(display.inputArray[i - 1]))
    var hasTotal = typeof total !== 'undefined';
    var hasSymbol = typeof currentSymbol !== 'undefined';
    
    if (isNumber) {
      if (hasSymbol) {
        total = doMath(total, display.inputArray[i], currentSymbol);
      }
      else {
        total = parseInt(display.inputArray[i]);
      }
    }
    else {
      if (hasTotal && lastInputIsNumber) {
        currentSymbol = display.inputArray[i];
      }
      else {
        display.output = 'Error';
        return display;
      }
    }
  };
  
  display.output = total.toString();
  return display;
}

module.exports = calculate;