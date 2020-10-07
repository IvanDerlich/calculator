import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next } = calculatorData;
  const { operation } = calculatorData;

  switch (buttonName) {
    case '+/-':
      next = Number(next);
      total = Number(total);
      next *= -1;
      total *= -1;
      next = next.toString();
      total = total.toString();
      break;
    case 'AC':
      next = '0';
      total = '0';
      break;
    case '.':
      next += '.';
      break;
    default:
      total = operate(total, next, operation);
  }
  return { total, next, operation };
};

export default calculate;
