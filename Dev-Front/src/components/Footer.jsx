import React, { useEffect } from "react";
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="md:grid grid-cols-4 p-5 md:p-0">
      {/* Brand Info */}
      <div data-aos="fade-right">
        <h1 className="text-xl font-light mb-3">Adsadapt India</h1>
        <p className="mb-1">Gurgaon, Haryana</p>
        <p className="mb-5">India - 122001</p>

        <div>
          <p className="font-medium">
            Phone: <span className="font-normal ml-1">+91 9625144157</span>
          </p>
          <p className="font-medium">
            Email: <span className="font-normal ml-1">info@yourbrand.com</span>
          </p>
        </div>
      </div>

      {/* Useful Links */}
      <div data-aos="fade-right" data-aos-delay="300" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">Useful Links</h1>
        <ul>
          <li className="mb-2 arrow"><Link to="/" className="text-zinc-700">Home</Link></li>
          <li className="mb-2 arrow"><Link to="/about" className="text-zinc-700">About Us</Link></li>
          <li className="mb-2 arrow"><Link to="/services" className="text-zinc-700">Services</Link></li>
          <li className="mb-2 arrow"><Link to="/terms" className="text-zinc-700">Terms of Service</Link></li>
        </ul>
      </div>

      {/* Our Services */}
      <div data-aos="fade-right" data-aos-delay="500" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">Our Services</h1>
        <ul>
          <li className="mb-2 arrow"><Link to="/web-development" className="text-zinc-700">Website Development</Link></li>
          <li className="mb-2 arrow"><Link to="/seo-optimization" className="text-zinc-700">SEO Services</Link></li>
          <li className="mb-2 arrow"><Link to="/smm" className="text-zinc-700">Social Media Marketing</Link></li>
          <li className="mb-2 arrow"><Link to="/ppc" className="text-zinc-700">PPC Advertising</Link></li>
          <li className="mb-2 arrow"><Link to="/graphic-design" className="text-zinc-700">Graphic Designing</Link></li>
          <li className="mb-2 arrow"><Link to="/video-editing" className="text-zinc-700">Video Editing</Link></li>
        </ul>
      </div>

      {/* Follow Us */}
      <div data-aos="fade-right" data-aos-delay="700" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">Follow Us</h1>
        <p className="text-sm">
          Stay connected for the latest updates, offers, and digital marketing tips.
        </p>
        <div className="flex gap-2 pr-5 mt-5">
          {/* <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoTwitter size={"26px"} />
          </div> */}

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
           <a href="https://www.facebook.com/profile.php?id=61577727865065"> <IoLogoFacebook size={"26px"} /></a>
           
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <a href="https://www.instagram.com/ads.adapt4/"> <IoLogoInstagram size={"26px"} /></a>
           
          </div>

          {/* <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">

            <IoLogoLinkedin size={"26px"} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
