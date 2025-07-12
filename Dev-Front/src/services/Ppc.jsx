import React from "react";
import Template from "./Template";
import image from "../img/ImgSec/Pay-Per-Click Advertising.webp";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Ppc = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Pay-Per-Click Advertising"}
        desc={
          "Drive instant traffic and generate high-quality leads with our result-driven PPC Advertising services. We create and manage targeted Google Ads and Social Media ad campaigns that focus on maximizing your ROI. From keyword research to ad copywriting and performance tracking — we handle everything to ensure your ads deliver real business results."
        }
        image={image}
      />
    </div>
  );
};

export default Ppc;
