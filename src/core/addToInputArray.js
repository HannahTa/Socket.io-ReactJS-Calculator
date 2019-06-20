const addToInputArray = (display, value) => {
  if (value === '') return display;
  display.inputArray.push(value);
  return display;
}

module.exports = addToInputArray;