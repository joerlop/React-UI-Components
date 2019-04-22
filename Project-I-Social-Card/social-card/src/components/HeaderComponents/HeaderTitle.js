import React from 'react';
import './Header.css';

let currentDate = new Date();

function HeaderTitle() {
    return (
        <div className="header-title">
            <h2>Lambda School</h2>
            <p>@LambdaSchool | ${currentDate.getDate()}</p>
        </div>                
    );
}

export default HeaderTitle;