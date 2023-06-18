import React from "react";
import videoBcg from "../images/videoBcg.mp4";

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <div className='overlay'></div>
        <video src={videoBcg} autoPlay loop muted />
        <div className='hero-content'>
          <a href='#tours' className='btn hero-btn'>
            discover france
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
