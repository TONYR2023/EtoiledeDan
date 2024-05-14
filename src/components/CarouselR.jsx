import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import photo1 from "./../assets/carousel/photo1.png";
import photo2 from "./../assets/carousel/photo2.png";
import photo3 from "./../assets/carousel/photo3.png";

const CarouselR = () => {
  return (
    <Carousel>
      <div>
        <img src={photo1} />
       
      </div>
      <div>
        <img src={photo2} />
       
      </div>
      <div>
        <img src={photo3} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselR;
