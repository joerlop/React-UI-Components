import React from 'react';
import './Button.scss';

import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

const ButtonContainer = () => {
    return (
        <div class="button-container">
            <NumberButton />
            <ActionButton />
        </div>
    ); 
};

export default ButtonContainer;