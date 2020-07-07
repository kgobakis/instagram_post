import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slideshow.css";

const slideImages = ["./media/1.jpg", "./media/2.jpg", "./media/3.jpg"];

const properties = {
  infinite: false,
  indicators: true,
  arrows: true,
  autoplay: false,
};

export const Slideshow = (props) => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((img, i) => (
          <div key={i} className="each-slide">
            <img src={img} width="100%"></img>
          </div>
        ))}
      </Slide>
    </div>
  );
};
