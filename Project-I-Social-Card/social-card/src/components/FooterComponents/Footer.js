import React from 'react';
import './Footer.css';

let commentCount = 0;

function Footer() {
    return (
        <div className="footer-container">
            <i className="far fa-comment"></i>
            <p id="comment" className="smComment no-show">{commentCount}</p>
            <i className="fas fa-sync"></i>
            <p className="count no-show"></p>
            <i className="far fa-heart"></i>
            <p className="count no-show"></p>
            <i className="far fa-envelope"></i>
            <p className="count no-show"></p>
        </div>             
    );
}

const comment = document.getElementsByClassName("smComment");
console.log(comment);

comment.addEventListener("click", target => {
    commentCount++;
    comment.classList.remove("no-show");
})

export default Footer;