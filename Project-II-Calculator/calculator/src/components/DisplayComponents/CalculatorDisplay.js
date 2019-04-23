import React from 'react';
import './Display.scss';

const CalculatorDisplay = (props) => {
    return (
        <div className="display-container">
            <p>{props.calcProp.total}</p>
        </div>
    ); 
};

export default CalculatorDisplay;