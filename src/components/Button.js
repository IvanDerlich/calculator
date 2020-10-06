import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ buttonName, wide, color }) {

  let className = 'button';

  className += wide
    ? ' wide'
    : '';

  const styles = { backgroundColor: color };

  return (
    <div className={className} style={styles} id="button">
      <p>{ buttonName}</p>
    </div>
  );
}

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
