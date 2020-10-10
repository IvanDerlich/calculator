import operate from './operate';

const calculate = calculatorData => {
  console.log(calculatorData, 'Calculator Data');
  let { total, next } = calculatorData;
  const { operation } = calculatorData;
  console.log(total, next, operation, 'total, next, operation');

  if (operation === '÷' && next === '0') {
    return total === '0'
      ? { total: 'Indetermination', next }
      : { total: 'Infinite', next };
  }

  switch (operation) {
    case '+/-':
      next = Number(next);
      next *= -1;
      next = next.toString();
      break;
    case 'AC':
      next = '0';
      total = '0';
      break;
    case '.':
      next += '.';
      break;
    case '=':
      total = next;
      next = '0';
      break;
    default:
      total = operate(total, next, operation);
      next = '0';
      if (total === -1) {
        total = 'Error';
      }
  }
  return { total, next };
};

export default calculate;
