import React from "react";
import Template from "./Template";
import image from "../img/portfolio/app-1.jpg";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const VideoEditing = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Video Editing"}
        desc={
          "Capture your audience's attention with professionally edited videos. We create engaging video content for YouTube, Instagram Reels, Facebook Ads, and more. From cutting, transitions, and text overlays to adding music and effects — we turn your raw footage into impactful visual stories that drive engagement and conversions."
        }
        image={image}
      />
    </div>
  );
};

export default VideoEditing;
