import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderContent from "./HeaderContent";

function HeaderContainer() {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <HeaderContent />    
        </div>                
    );
}

export default HeaderContainer;