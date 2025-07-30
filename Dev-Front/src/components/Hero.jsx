import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./hero-img.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-center justify-start px-4 md:px-16"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundColor: "rgb(234 88 12)",
      }}
    >
      <div
        className="w-full md:max-w-3xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg px-6 md:px-10 py-7 rounded-2xl text-white"
        data-aos="fade-up"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Boost Your Online Presence & Get More Leads
        </h1>
        <p className="text-lg md:text-xl mt-4 text-white">
          We offer Website Development, SEO, Social Media Marketing, PPC Ads, Graphic Designing & more to drive real business results for you.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
