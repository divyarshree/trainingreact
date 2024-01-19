import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FirstBodySec = ({Bodyimage}) => {
    useEffect(() => {
        // Initialize AOS with a delay and a slower duration
        AOS.init({
          delay: 200, // Set the delay in milliseconds
          duration: 1000, // Set the duration of the animations in milliseconds
          easing: 'ease-in-out', // You can also set the easing function (optional)
        //   once: true // Whether animation should happen only once while scrolling down (optional)
        });
    
        // Add AOS event listeners to update the animations on content change (optional)
        AOS.refresh();
      }, []);
    const bodyimagepath = `assets/images/${Bodyimage}`;
    return(

        <div className='firstbody'>
            <div className='firstimage' data-aos="fade-right" >
                <img src={bodyimagepath} alt="bodyimage"></img>
            </div>
            <div className='firstcontent' data-aos="fade-left" >
                <p>
                The kite festival is a vibrant celebration where people come together to fly colorful kites, creating a mesmerizing display in the sky. 
                This event often involves friendly competitions, with participants showcasing their kite-flying skills and creativity. 
                The sky becomes a canvas as kites of various shapes and sizes, adorned with vivid colors and designs, dance against the backdrop of the sun. 
                Traditional music, delicious food, and a sense of community add to the festive atmosphere. 
                Kite festivals are not only a visual spectacle but also a cultural and social experience that brings people of all ages together to enjoy the simple joy of flying kites.</p>
            </div>
        </div>
    )
}

export default FirstBodySec