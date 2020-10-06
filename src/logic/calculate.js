import operate from './operate';

const calculate = (calculatorDataObject, buttonName) => {
  let { total } = calculatorDataObject;
  let { next } = calculatorDataObject;
  const { operation } = calculatorDataObject;

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
    case '=':
      total = operate(total, next, operation);
      break;
    case '.':
      next += '.';
      break;
    default:
  }

  return { total, next, operation };
};

export default calculate;
