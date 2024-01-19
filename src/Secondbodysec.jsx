import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Secondbodysec = ({ sectionBodies }) => {
  return (
    <div className='secondbody' data-aos="fade-up">
      {sectionBodies.map((body, index) => (
        <div key={index} className='card'>
          <div className='secondimages'>
            <img src={`assets/images/${body.image}`} alt='' />
          </div>
          <div className='secondcontent'>
            <h6>{body.title}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Secondbodysec;