import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';
import operate from '../logic/operate';

function Display({ result, total, operation }) {
  console.log(result, total, operation);
  return (
    <div className="display" id="button-panel">
      <p className="">{total}</p>
      <p>{operation}</p>
      <p>{result}</p>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
  total: '0',
  operation: '=',
};

Display.propTypes = {
  result: PropTypes.string,
  total: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
