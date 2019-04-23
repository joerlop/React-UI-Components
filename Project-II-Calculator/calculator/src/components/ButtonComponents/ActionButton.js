import React from 'react';
import './Button.scss';

const ActionButton = props => {
    return (
      <div className="action-button">
        <button id="division">/</button>
        <button id="multiplication">*</button>
        <button id="difference">-</button>
        <button id="sum">+</button>
        <button id="equal">=</button>
      </div>
    );
  };
  
  export default ActionButton;