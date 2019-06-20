const backspace = (display, value) => {
  display.output = display.output.slice(0, -1);
  return display;
}

module.exports = backspace;