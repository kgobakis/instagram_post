import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slideshow.css";

const slideImages = ["./media/4.jpg", "./media/2.jpg", "./media/3.jpg"];

const properties = {
  infinite: false,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  autoplay: false,
};

export const Slideshow = (props) => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((img, i) => (
          <div
            style={{ height: props.height - 150 }}
            key={i}
            className="each-slide"
          >
            <img src={img} width="100%"></img>
          </div>
        ))}
      </Slide>
    </div>
  );
};
