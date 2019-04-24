import React from 'react';
import './Button.scss';

const ActionButton = props => {
    return (
        <button className={props.actionProp.buttonStyle}>{props.actionProp.text}</button>
    );
  };
  
  export default ActionButton;