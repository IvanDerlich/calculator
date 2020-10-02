import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const A = Big(Number(numberOne));
  const B = Big(Number(numberTwo));
  let C = 0;

  if (operation === '÷' && B === 0) {
    return C === 0
      ? 'Indetermination'
      : 'Infinite';
  }

  switch (operation) {
    case '+':
      C = A + B;
      break;
    case '-':
      C = A - B;
      break;
    case 'x':
      C = A * B;
      break;
    case '÷':
      C = A / B;
      break;
    case '%':
      C = (A * B) / 100;
      break;
    default:
      return -1;
  }
  return C.toString;
};

export default operate;
