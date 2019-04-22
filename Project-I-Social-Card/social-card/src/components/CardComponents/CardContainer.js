import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from "./CardContent";

function CardContainer() {
    return (
        <a className="card-container" target="_blank" href="https://www.reactjs.org">
            <div>
                <CardBanner />
                <CardContent />    
            </div>
        </a>                
    );
}

export default CardContainer;