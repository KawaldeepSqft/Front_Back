import React from "react";
import Template from "./Template";
import image from "../img/portfolio/app-1.jpg";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Smm = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Social Media Marketing"}
        desc={
          "Want to grow your brand online? Our Social Media Marketing services help you build engagement, reach a wider audience, and drive real results. From creative content creation and targeted ads to daily account management, we help you stay active and visible on all major social platforms like Facebook, Instagram, LinkedIn, and more."
        }
        image={image}
      />
    </div>
  );
};

export default Smm;
