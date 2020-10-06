import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(Number(numberOne));
  const secondNumber = Big(Number(numberTwo));
  let result = 0;

  if (operation === '÷' && secondNumber === 0) {
    return result === 0
      ? 'Indetermination'
      : 'Infinite';
  }

  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case 'x':
      result = firstNumber * secondNumber;
      break;
    case '÷':
      result = firstNumber / secondNumber;
      break;
    case '%':
      result = (firstNumber * secondNumber) / 100;
      break;
    default:
      return -1;
  }
  return result.toString;
};

export default operate;
