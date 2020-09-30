import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

function Display({ result }) {
  return (
    <div className="Display" id="button-panel">      
      <p>
        Display Component:
        {result}
      </p>
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
