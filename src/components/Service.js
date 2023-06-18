import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Service = ({ icon, title }) => {
  return (
    <AnimationOnScroll animateIn='animate__zoomIn'>
      <article className='service'>
        <div className='postcard fade-in-bottom'>
          <div className='img-container'>
            <img src={icon} alt='service' className='service-img' />
            <div className='service-overlay'>
              <h4 className='service-title'>{title}</h4>
            </div>
          </div>
        </div>
      </article>
    </AnimationOnScroll>
  );
};

export default Service;
