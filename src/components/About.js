import React from "react";
import aboutImg1 from "../images/about-1.jpeg";
import aboutImg2 from "../images/about-2.jpeg";

const About = () => {
  return (
    <section className='section' id='about'>
      <div className='section-center about-center about-white'>
        <div className='about-img'>
          <img src={aboutImg1} className='about-photo' alt='paris window' />
        </div>

        <article className='about-info'>
          <h2 className='about-title black-title'>about</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>

          <a href='#home' className='btn-small black-btn'>
            read more
          </a>
        </article>
      </div>

      <div className='section-center about-center about-black'>
        <article className='about-info'>
          <h2 className='about-title white-title'>our mission</h2>
          <p className='white-p'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>

          <a href='#home' className='btn-small white-btn'>
            read more
          </a>
        </article>

        <div className='about-img'>
          <img src={aboutImg2} className='about-photo' alt='building' />
        </div>
      </div>
    </section>
  );
};

export default About;
