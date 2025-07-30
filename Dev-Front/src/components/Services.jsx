import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = ({ setSubj }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleClick = (path, subject) => {
    navigate(path);
    setSubj(subject);
  };

  const cardProps = [
    {
      path: "/web-development",
      subject: "Web Development",
      title: "Website Development",
      desc:
        "Get fast, responsive, and SEO-friendly websites that help grow your business and connect with your audience easily.",
    },
    {
      path: "/Seo",
      subject: "Search Engine Optimization",
      title: "Search Engine Optimization",
      desc:
        "Improve your Google ranking and drive targeted organic traffic to your website with our proven SEO strategies.",
    },
    {
      path: "/smm",
      subject: "Social Media Marketing",
      title: "Social Media Marketing",
      desc:
        "Boost your online presence with engaging posts, targeted ads, and smart campaigns across all social platforms.",
    },
    {
      path: "/GraphicDesigning",
      subject: "Graphic Designing",
      title: "Graphic Design",
      desc:
        "Creative and eye-catching logos, banners, social media creatives, ad designs, brochures, and business cards to make your brand stand out.",
    },
    {
      path: "/smo",
      subject: "SMO",
      title: "SMO",
      desc:
        "Optimize your social media profiles for better reach, audience engagement, and consistent brand identity online.",
    },
    {
      path: "/Ppc",
      subject: "PPC Ads",
      title: "PPC Ads",
      desc:
        "Get fast leads and website traffic with conversion-focused Google Ads and Social Media Paid Ad campaigns.",
    },
    {
      path: "/VideoEditing",
      subject: "Video Editing",
      title: "Video Editing",
      desc:
        "Professionally edited videos for YouTube, Reels, and ads that help you grab attention and increase engagement.",
    },
  ];

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Explore our range of digital marketing and development services designed
        for your business success.
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
      >
        {cardProps.map((item, index) => (
          <div
            key={index}
            className="h-[380px] w-full"
            onClick={() => handleClick(item.path, item.subject)}
          >
            <Card img={<HiOutlineChartPie />} title={item.title} desc={item.desc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
