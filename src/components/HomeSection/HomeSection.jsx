// src/components/HomeSection.js
import React, { useRef } from 'react';

import '../HomeSection/HomeSection.css';


const HomeSection = () => {
  const slidesRef = useRef(null);
  let index = 0;

  const next = () => {
    slidesRef.current.children[index].classList.remove('active');
    index = (index + 1) % slidesRef.current.children.length;
    slidesRef.current.children[index].classList.add('active');
  };

  const prev = () => {
    slidesRef.current.children[index].classList.remove('active');
    index = (index - 1 + slidesRef.current.children.length) % slidesRef.current.children.length;
    slidesRef.current.children[index].classList.add('active');
  };

  return (
    <section className="home" id='Home'>

    <div className="slides-container" ref={slidesRef}>


        <div className="slide active">
            <div className="content">
                <span></span>
                <h3>HealthCare Professionals</h3>
                
               
            </div>
            <div className="image">
                <img src="/images/image2.png" alt="" />
            </div>
        </div>

        <div className="slide">
            <div className="content">
                
                <h3>Get quality healthcare at home.</h3>
                
            </div>
            <div className="image">
                <img src="/images/image.png" alt="" />
            </div>
        </div>

        <div className="slide">
            <div className="content">
               
                <h3>24/7 Availablity</h3>
                
            </div>
            <div className="image">
                <img src="/images/image9.png" alt="" />
            </div>
        </div>

    </div>

    <div id="next-slide" className="fas fa-angle-right" onClick={next}></div>
    <div id="prev-slide" className="fas fa-angle-left" onClick={prev}></div>

</section>

  );
};

export default HomeSection;
