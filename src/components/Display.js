import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

function Display({ result }) {
  return (
    <div className="display" id="button-panel">
      <p>{result}</p>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
