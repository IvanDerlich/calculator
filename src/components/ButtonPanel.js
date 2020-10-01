import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

function ButtonPanel() {
  return (
    <div className="button-panel" id="button-panel">
      <div className="group">
        <Button buttonName="AC" color />
        <Button buttonName="+/-" color />
        <Button buttonName="%" color />
        <Button buttonName="÷" />
      </div>
      <div className="group">
        <Button buttonName="7" color />
        <Button buttonName="8" color />
        <Button buttonName="9" color />
        <Button buttonName="x" />
      </div>
      <div className="group">
        <Button buttonName="4" color />
        <Button buttonName="5" color />
        <Button buttonName="6" color />
        <Button buttonName="-" />
      </div>
      <div className="group">
        <Button buttonName="1" color />
        <Button buttonName="2" color />
        <Button buttonName="3" color />
        <Button buttonName="+" />
      </div>
      <div className="group">
        <Button buttonName="0" color wide />
        <Button buttonName="." color />
        <Button buttonName="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
