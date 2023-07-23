import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";

const Service = () => {
  return (
    
      <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      showIndicators={true}
      interval={1000}
      >
        <div>
          <img src={img1} alt="Item-1"/>
          <p className="legend">Full Stack</p>
        </div>

        <div>
          <img src={img2} alt="Item-2" />
          <p className="legend">Peer to peer</p>
        </div>
      </Carousel>
  
  );
};

export default Service;
