import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slideshow.css";

const slideImages = ["../media/1.jpg", "../media/2.jpg", "../media/3.jpg"];

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
        <div className="each-slide">
          <div
            style={{
              backgroundImage: "url(" + require("../media/1.jpg") + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: props.height,
              width: props.width / 2,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: props.height,
              width: props.width,
            }}
          >
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          >
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};
