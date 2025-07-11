import React from "react";
import Template from "./Template";
import image from "../img/portfolio/app-1.jpg";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Seo = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Social Media Optimization"}
        desc={
          "Enhance your brand visibility and audience engagement across all major social platforms. With our Social Media Optimization services, we optimize your profiles, create engaging content, and implement strategies that improve reach, boost followers, and drive organic engagement. Let your business stay active, relevant, and visible online."
        }
        image={image}
      />
    </div>
  );
};

export default Seo;
