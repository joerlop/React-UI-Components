import React from 'react';
import './Button.scss';

const NumberButton = props => {
    return (
        <button className={props.numberProp.buttonStyle}>{props.numberProp.text}</button>
    );
  };
  
  export default NumberButton;