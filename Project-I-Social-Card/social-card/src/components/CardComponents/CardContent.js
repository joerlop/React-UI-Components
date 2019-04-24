import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="card-content">
            <h3>Get Started with React</h3>
            <p>React makes it painless to create intercative UIs.
                Design simple views forn each state in your application.
            </p>
            <p className="webpage">reactjs.org</p>    
        </div>                
    );
}

export default CardContent;