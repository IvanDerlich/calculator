import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ buttonName }) {
  return (
    <button type="button" className="Button" id="button">
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
