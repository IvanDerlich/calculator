import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';
import displayObjects from './ButtonPanel-displayObjects';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  handleClick(buttonName) {
    const { clickHandler } = this.props;
    return clickHandler;
  }

  render() {
    return (
      <div className="button-panel" id="button-panel">
        {
          // eslint-disable-next-line arrow-body-style
          displayObjects.map((group, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div className="group" key={index}>
                {
                  // eslint-disable-next-line arrow-body-style
                  group.map(obj => {
                    return (
                      <Button
                        key={obj.buttonName}
                        clickHandler={this.handleClick(obj.buttonName)}
                        buttonName={obj.buttonName}
                        backgroundColor={obj.backgroundColor}
                        wide={obj.wide}
                      />
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
