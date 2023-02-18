import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/Web3.jpg";
import img2 from "../assets/Web4.jpg";


const Services = () => {
  return (
 <Carousel
 infiniteLoop
 autoPlay
 showStatus = {false}
 showIndicators = {false}
 showArrows = {false}
 interval={1000}
 
 >
    <div>
        <img src= {img1} alt='Item1' />
        <h1 className='heading'>Web and Software Development</h1>
        <ul>
            <p>We'll Provide Front-End Services </p>
            <p>We'll make a Back-End & Database</p>
            <p>Responsive Web Applications</p>
        </ul>
    </div>

    <div>
        <img src= {img2} alt='Item2' />
        <h1 className='heading'>Digital Services</h1>
        <ul>
            <p>Graphic Designing</p>
            <p>Digital Marketing</p>
            <p>Content Writing</p>
            <p>UI & UX Design</p>
        </ul>
    </div>

 </Carousel>

    
  )
}

export default Services;