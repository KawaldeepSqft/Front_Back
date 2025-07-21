import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import app1 from "../img/ImgSec/education.avif";
import app2 from "../img/ImgSec/Real estate.webp";
import app3 from "../img/ImgSec/Manufacturers.png";
import product1 from "../img/ImgSec/Interior designers.webp";
import product3 from "../img/ImgSec/Doctors.webp";
import branding1 from "../img/ImgSec/Dental cilinic.webp";

// PortfolioProduct Component
const PortfolioProduct = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="overflow-hidden rounded-xl shadow-md w-[300px] h-[200px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:opacity-80 hover:-translate-y-2 transition-all duration-300"
        />
      </div>
      <p className="mt-3 text-lg font-medium text-gray-800">{title}</p>
    </div>
  );
};

const Portfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">Industry We Serve</h1>

      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      {/* <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Explore Our Live Courses & Make Bharat ka Career Launchpad
      </p> */}

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 mb-10">
        <div data-aos="fade-up" >
          <PortfolioProduct image={app1} title="Education" />
        </div>

        <div data-aos="fade-up" >
          <PortfolioProduct image={app2} title="Real Estate" />
        </div>

        <div data-aos="fade-up" >
          <PortfolioProduct image={app3} title="Manufacturing" />
        </div>

        <div data-aos="fade-up" >
          <PortfolioProduct image={product1} title="Interior Designers" />
        </div>

        <div data-aos="fade-up" >
          <PortfolioProduct image={branding1} title="Dental Clinic" />
        </div>

        <div data-aos="fade-up" >
          <PortfolioProduct image={product3} title="Doctors" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
