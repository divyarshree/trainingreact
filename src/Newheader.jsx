// Newheader.js
import React from 'react';

const Newheader = ({ imageName }) => {
    const imagePath = `/assets/images/${imageName}`;

    return (
        <div className='header'>
            <img src={imagePath} alt="HeaderLogo" />
        </div>
    );
};

export default Newheader;