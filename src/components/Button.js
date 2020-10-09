import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  buttonName, wide, backgroundColor, onClick,
}) {
  let className = 'button';

  className += wide
    ? ' wide'
    : '';

  return (
    <div
      className={className}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={onClick}
      style={{ backgroundColor }}
      id="button"
    >
      { buttonName }
    </div>
  );
}

Button.defaultProps = {
  wide: false,
  backgroundColor: 'orange',
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Make this required when finished
  wide: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default Button;
