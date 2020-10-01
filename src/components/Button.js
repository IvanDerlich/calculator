import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ buttonName, wide, color }) {
  const styles = wide
    ? { width: '50%' }
    : { width: '25%' };

  styles.backgroundColor = color
    ? '#dfdfdf'
    : '#F29444';

  return (
    <div className="button" style={styles} id="button">
      <p>{ buttonName}</p>
    </div>
  );
}

Button.defaultProps = {
  buttonName: 'defaultName',
  wide: false,
  color: false,
};

Button.propTypes = {
  buttonName: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

export default Button;
