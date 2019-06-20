function doMath(total, value, symbol) {
  total = parseInt(total);
  switch (symbol) {
    case '+':
      total += parseInt(value);
      break;
    case '-':
      total -= parseInt(value);
      break;
    case '*':
      total *= parseInt(value);
      break;
    case '/':
      total /= parseInt(value);
      break;
  }
  return total;
}

module.exports = doMath;