import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = ({setSubj}) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  // const clickHandler = () => {
  //   navigate("app-development");
  // };
  return (
    <div className="text-[#7A6960] ">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Explore our range of digital marketing and development services designed for your business success.
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
      >
        <div onClick={() =>{ navigate("/web-development");
          setSubj("Web Development");
        }}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Website Development	"}
            desc={
              "Get fast, responsive, and SEO-friendly websites that help grow your business and connect with your audience easily."
            }
          />
        </div>

        <div onClick={() =>{ navigate("/Seo");
          setSubj("Search Engine Optimization");
        }}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Search Engine Optimization "}
            desc={
              "Improve your Google ranking and drive targeted organic traffic to your website with our proven SEO strategies."
            }
          />
        </div>

        <div onClick={() => {navigate("/smm");
          setSubj("Social Media Marketing");
        }}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Social Media Marketing"}
            desc={
              "Boost your online presence with engaging posts, targeted ads, and smart campaigns across all social platforms."
            }
          />
        </div>

        <div onClick={() => {navigate("/GraphicDesigning");
          setSubj("Graphic Designing");
        }}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Graphic Designing	"}
            desc={
              "Creative and eye-catching logos, banners, social media creatives, ad designs, brochures, and business cards to make your brand stand out."
            }
          />
        </div>
        
        <div onClick={() => {navigate("/smo")
          setSubj("smo")
        }}>
          <Card
            img={<HiOutlineChartPie />}
            title={"SMO	"}
            desc={
              "Optimize your social media profiles for better reach, audience engagement, and consistent brand identity online."
            }
          />
        </div>
        <div onClick={() => {navigate("/Ppc");
          setSubj("PPC Ads")
        }}>
          <Card
            img={<HiOutlineChartPie />}
            title={"PPC Ads	"}
            desc={
              "Get fast leads and website traffic with conversion-focused Google Ads and Social Media Paid Ad campaigns."
            }
          />
        </div>
        <div onClick={() => {navigate("/VideoEditing");
          setSubj("Video Editing")
        }}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Video Editing		"}
            desc={
              "Professionally edited videos for YouTube, Reels, and ads that help you grab attention and increase engagement."
            }
          />
        </div>

      </div>
    </div>
  );
};

export default Services;
