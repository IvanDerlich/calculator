import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

function Display({ next, total }) {
  return (
    <div className="display" id="button-panel">
      <p>{total}</p>
      <p>{next}</p>
    </div>
  );
}

Display.defaultProps = {
  next: '0',
  total: '0',
};

Display.propTypes = {
  next: PropTypes.string,
  total: PropTypes.string,
};

export default Display;
