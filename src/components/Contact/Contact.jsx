import React from "react";
import '../Contact/Contact.css'

const Contact = () =>{
    return (
        <section class="contact" id="Contact">
         <h1 className="title">
         Our<span>Contact </span> 
      </h1>
        <div class="icons-container">
    
            <div class="icons">
                <i class="fas fa-phone"></i>
                <h3>our number</h3>
                <p>Rakesh Kumar 8383943227</p>
                <p>Mohit shrivastava 7755078663</p>
               
            </div>
    
            <div class="icons">
                <i class="fas fa-envelope"></i>
                <h3>our email</h3>
                <p>mohitranjha102@gmail.com </p>
               
            </div>
    
            <div class="icons">
                <i class="fas fa-map-marker-alt"></i>
                <h3>our address</h3>
                <p>Ambuj Tower Flat no. 403, Taj highway, Gaziyabad</p>
            </div>
    
        </div>
    
       
    
    </section>
    );

};
export default Contact;