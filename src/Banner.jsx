import React from 'react'


const Banner = ({ Bannerimage }) => {
    const bannerpath = `assets/images/${Bannerimage}`;
    return (
        <div className='bannerimage'>
            <img src={bannerpath} alt="banner"></img>
        </div>
        )
}

export default Banner;
  
