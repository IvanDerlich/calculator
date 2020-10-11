import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next } = calculatorData;
  const operation = buttonName;

  if (operation === '÷' && next === '0') {
    return total === '0'
      ? { total: 'Indetermination', next }
      : { total: 'Infinite', next };
  }

  if (total === 'Indetermination' || total === 'Infinite') {
    return { total: 'Invalid', next };
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
  return { total, next, operation };
};

export default calculate;
