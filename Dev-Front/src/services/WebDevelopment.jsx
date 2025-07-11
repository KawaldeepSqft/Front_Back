import React from "react";
import Template from "./Template";
import image from "../img/portfolio/app-3.jpg";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const WebDevelopment = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Web Development"}
        desc={
          "We build fast, secure, and responsive websites that not only look great but also perform well on all devices. Whether you need a business website, eCommerce store, or a custom web app — our expert developers turn your ideas into reality. With SEO optimization, mobile-first design, and a user-friendly interface, we help drive engagement and conversions."
        }
        image={image}
      />
    </div>
  );
};

export default WebDevelopment;
