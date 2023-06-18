import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Tour = ({ img, date, title, info, location, duration, price }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <AnimationOnScroll animateIn='animate__zoomIn'>
      <article className='tour-card'>
        <div
          className={`tour-img-container ${flipped ? "flipped" : ""}`}
          onMouseOver={() => setFlipped(true)}
          onMouseOut={() => setFlipped(false)}
        >
          <div className='front'>
            <img src={img} className='tour-img' alt={title} />
            <p className='tour-date'>{date}</p>
          </div>

          <div className='back'>
            <p>{info}</p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-street-view'></i>
                </span>{" "}
                {location}
              </p>
              <p>{duration} days</p>
              <p>from ${price}</p>
            </div>
          </div>
        </div>

        <h4 className='tour-title'>{title}</h4>
      </article>
    </AnimationOnScroll>
  );
};

export default Tour;
