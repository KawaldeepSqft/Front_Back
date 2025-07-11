import React from "react";
import Template from "./Template";
import image from "../img/portfolio/app-1.jpg";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Smo = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"SEO Optimization"}
        desc={
          "Struggling to rank on Google? We help your website climb to the top of search results with our expert SEO services. From keyword research and on-page SEO to backlinks and technical audits, we cover everything. Boost your organic traffic, improve visibility, and attract the right audience to grow your business online."
        }
        image={image}
      />
    </div>
  );
};

export default Smo;
