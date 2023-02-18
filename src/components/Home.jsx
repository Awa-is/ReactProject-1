import React from 'react';
import vg from "../assets/Web2.webp";
import {AiFillGoogleCircle, AiFillYoutube, AiFillInstagram, AiFillAmazonCircle} from "react-icons/ai";

const Home = () => {
  return (
<>
<div className='home' id='home'>
        <main>
            <h1>Tech Stars</h1>
            <p>Solution to your all problems </p>
        </main>
    </div>

    <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
<p>Welcome to InfoTech, your one-stop-shop for all things related to technology! </p>
        </div>
    </div>
    <div className="home3" id='about'>
        <div><h1>Who we are</h1>
        <p>
        We are a team of experienced professionals who are passionate about keeping up with the latest advancements in the tech world, and sharing our knowledge with others. IT consulting Our experienced IT consultants can provide expert advice and support to help you optimize your business technology and infrastructure. Our team of tech experts is available to help you troubleshoot and resolve any technical issues you may be experiencing, whether it’s with your computer, smartphone, or other device. We offer step-by-step tutorials on a wide range of topics, from basic computer skills to more advanced programming and software development. At InfoTech, we are committed to providing our customers with the highest level of service and support. Whether you’re a tech enthusiast, small business owner, or just someone who wants to stay up-to-date with the latest tech trends, we have something for everyone. So, why wait? Start exploring our website today and see how we can help you stay connected and informed in the ever-changing world of technology.
        </p>
        </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>

        <article>
          <div style={{animationDelay:"0.3s"}}>
        <AiFillGoogleCircle />
        <p></p>
          </div>
          <div style={{animationDelay:"0.5s"}}>
        <AiFillAmazonCircle />
        <p></p>
          </div>
          <div style={{animationDelay:"0.7s"}}>
        <AiFillYoutube />
        <p></p>
          </div>
          <div style={{animationDelay:"0.9s"}}>
        <AiFillInstagram />
        <p></p>
          </div>  
        </article>
      </div>
    </div>

</>
  )
}

export default Home;