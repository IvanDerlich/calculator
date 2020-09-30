import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ buttonName }) {
  const style = buttonName === '0'
    ? { width: '50%' }
    : {};

  return (
    <div className="button" style={style} id="button">
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
