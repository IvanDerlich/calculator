import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

function ButtonPanel() {
  return (
    <div className="button-panel" id="button-panel">
      <div className="group">
        <Button buttonName="AC" color="#dfdfdf" />
        <Button buttonName="+/-" color="#dfdfdf" />
        <Button buttonName="%" color="#dfdfdf" />
        <Button buttonName="÷" />
      </div>
      <div className="group">
        <Button buttonName="7" color="#dfdfdf" />
        <Button buttonName="8" color="#dfdfdf" />
        <Button buttonName="9" color="#dfdfdf" />
        <Button buttonName="x" />
      </div>
      <div className="group">
        <Button buttonName="4" color="#dfdfdf" />
        <Button buttonName="5" color="#dfdfdf" />
        <Button buttonName="6" color="#dfdfdf" />
        <Button buttonName="-" />
      </div>
      <div className="group">
        <Button buttonName="1" color="#dfdfdf" />
        <Button buttonName="2" color="#dfdfdf" />
        <Button buttonName="3" color="#dfdfdf" />
        <Button buttonName="+" />
      </div>
      <div className="group">
        <Button buttonName="0" wide color="#dfdfdf" />
        <Button buttonName="." color="#dfdfdf" />
        <Button buttonName="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
