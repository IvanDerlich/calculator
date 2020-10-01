import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ buttonName }) {
  return (
    <div className="Button" id="button">
      <p>
        { buttonName}
      </p>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
