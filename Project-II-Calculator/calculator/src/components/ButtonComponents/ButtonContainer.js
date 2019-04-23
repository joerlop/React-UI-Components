import React from 'react';
import './Button.scss';

import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

const numbers = [
    {text: "/",
    buttonStyle: "operation"},
    {text: 7,
    buttonStyle: "number"},
    {text: 8,
    buttonStyle: "number"},
    {text: 9,
    buttonStyle: "number"},
    {text: "x",
    buttonStyle: "operation"},
    {text: 4,
    buttonStyle: "number"},
    {text: 5,
    buttonStyle: "number"},
    {text: 6,
    buttonStyle: "number"},
    {text: "-",
    buttonStyle: "operation"},
    {text: 1,
    buttonStyle: "number"},
    {text: 2,
    buttonStyle: "number"},
    {text: 3,
    buttonStyle: "number"},
    {text: "+",
    buttonStyle: "operation"},
]

const actions = [
    {text: "clear",
    buttonStyle: "action clear"},
    {text: 0,
    buttonStyle: "action zero"},
]

const equal = {text: "=",
    buttonStyle: "operation eqaul"};


const ButtonContainer = (props) => {
    return (
        <div className="button-container">
            <ActionButton actionProp={actions[0]} />
            {numbers.map(number => {
                return <NumberButton stateProp={props} numberProp={number} />;
            })}
            <ActionButton actionProp={actions[1]} />
            <NumberButton numberProp={equal} />
        </div>
    ); 
};

export default ButtonContainer;