import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Brand = () => {
  return (
    <section className='section brand'>
      <AnimationOnScroll animateIn='animate__zoomIn'>
        <h1>nouveau départ</h1>
      </AnimationOnScroll>
    </section>
  );
};

export default Brand;
