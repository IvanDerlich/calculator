import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    const {
      buttonName, wide, backgroundColor,
    } = this.props;

    let className = 'button';

    className += wide
      ? ' wide'
      : '';

    return (
      <div
        className={className}
        onClick={() => this.handleClick(buttonName)}
        role="button"
        tabIndex={0}
        onKeyPress={() => this.handleClick(buttonName)}
        style={{ backgroundColor }}
        id="button"
      >
        { buttonName }
      </div>
    );
  }
}

Button.defaultProps = {
  wide: false,
  backgroundColor: 'orange',
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired, // Make this required when finished
  wide: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default Button;
