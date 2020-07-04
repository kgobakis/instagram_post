import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slideshow.css";

const slideImages = ["../media/1.jpg", "../media/2.jpg", "../media/3.jpg"];

const properties = {
  infinite: false,
  // indicators: true,
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
              backgroundImage: "url(" + require("../../media/1.jpg") + ")",
              shadowColor: "rgba(0,0,0, .4)", // IOS

              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: props.height - 50,
              width: props.width / 1.4,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: "url(" + require("../../media/2.jpg") + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: props.height - 50,
              width: props.width / 1.4,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: "url(" + require("../../media/3.jpg") + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: props.height - 50,
              width: props.width / 1.4,
            }}
          ></div>
        </div>
      </Slide>
    </div>
  );
};
