import React from "react";
import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <h2 className='tours-title'>featured</h2>

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
