import React from "react";
import Template from "./Template";
import appImage from "../img//ImgSec/Graphic Designing.avif";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const GraphicDesigning = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Graphic Designing"}
        desc={
          "Make your brand stand out with visually appealing designs! Our Graphic Designing services cover everything from logo creation, social media creatives, banners, and ad designs to brochures and business cards. We blend creativity with strategy to deliver designs that not only look great but also communicate your brand message effectively."
        }
        image={appImage}
      />
    </div>
  );
};

export default GraphicDesigning;
