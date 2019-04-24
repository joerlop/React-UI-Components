import React from 'react';
import './Header.css';

let currentDate = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function HeaderTitle() {
    return (
        <div className="header-title">
            <h3>Lambda School</h3>
            <p>@LambdaSchool | {currentDate.getDate()} {monthNames[currentDate.getMonth()]}</p>
        </div>                
    );
}

export default HeaderTitle;