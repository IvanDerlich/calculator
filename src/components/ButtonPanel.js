import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';
import displayObjects from './ButtonPanel-displayObjects';

const ButtonPanel = ({ onClick }) => (
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
                    onClick={onClick}
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

export default ButtonPanel;

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};
