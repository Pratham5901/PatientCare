
import React from 'react';
import Services from './Services'; // Adjust the path based on your project structure
import '../ServicesSection/ServicesSection.css'; // Update the path to your actual CSS file

const ServicesSection = () => {
  return (
    <section className="products" id='Services'>
      <h1 className="title" >
        Our <span>Services</span> 
      </h1>

      <div className="box-container" >
        <Services name="Patient Grooming" imageUrl="/images/image4.png" paragraph={"Teeth, Hair, Skin Care, Bath & Toilet"} />
        <Services name="Maintaining & Tidying up the patient space" imageUrl="/images/image3.png" paragraph={'Position change of bed ridden patient'} />
        <Services name="Assistance in feeding for paitents" imageUrl="/images/image5.png" paragraph={"Serving food and cleaning up"} />
        {/* Add more products using the Product component */}
      </div>
      <div className="box-container">
        <Services name="Exercise Support" imageUrl="/images/image6.png" paragraph={"With guidance from physiotherpist"} />
        <Services name="Oral Medications" imageUrl="/images/image7.png" paragraph={'Under guidance of family members'} />
        <Services name="Help in walking/using walker" imageUrl="/images/image8.png" paragraph={"Assistance in mobilization of patient"} />
        {/* Add more products using the Product component */}
      </div>
    </section>
  );
};

export default ServicesSection;
