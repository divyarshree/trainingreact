import React, { useState } from 'react';

const data = [
  'https://c4.wallpaperflare.com/wallpaper/86/419/788/random-green-hd-wallpaper-preview.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWuoRMhkIuD7sKIOjpzR-aARujCaL4qq5qQ&usqp=CAU',
  'https://wallpapers.com/images/hd/random-background-1920-x-1080-ac6dk6zpwjrrp292.jpg',
  'https://wallpaperaccess.com/full/1295876.jpg',
];

function Imageslider() {
  const [activeImageindex, setActiveimageindex] = useState(0);

  const handlePrevClick = () => {
    if (activeImageindex === 0) setActiveimageindex(data.length - 1);
    else setActiveimageindex(activeImageindex - 1);
  };

  const handleNextClick = () => {
    setActiveimageindex((activeImageindex + 1) % data.length);
  };

  return (
    <div className=''>
      <button className='' onClick={handlePrevClick}>
        Prev
      </button>
      <img src={data[activeImageindex]} alt='' className='' />
      <button className='' onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}

export default Imageslider;
