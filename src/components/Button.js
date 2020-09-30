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

Button.defaultProps = {
  buttonName: 'defaultName',
};

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;
