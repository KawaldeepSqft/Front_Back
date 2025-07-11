import React from "react";
import Accordian from "./Accordian";

const Faquestions = () => {
  return (
    <>
      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"What is SEO and how can it help my business?"}
            answer={
              "SEO (Search Engine Optimization) improves your website's visibility on search engines like Google, helping you get more organic traffic and potential customers."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"How long does it take to build a website?"}
            answer={
              "Website development time depends on the project size and complexity. On average, a simple business website takes 2-4 weeks to design and develop."
            }
          />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"What’s the difference between SMM and SMO?"}
            answer={
              "SMM (Social Media Marketing) focuses on paid ads and content promotion, while SMO (Social Media Optimization) is about improving your social profiles for better organic engagement."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"How much budget is required for PPC Ads?"}
            answer={
              "PPC budget totally depends on your business goals and competition. We help you set an effective budget and run result-driven Google and Social Media Ads."
            }
          />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0 ">
          <Accordian
            question={"Do you provide custom graphic design services?"}
            answer={
              "Yes! We offer custom graphic design services like logo creation, social media creatives, banners, business cards, and more as per your brand needs."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"Can you edit promotional videos for social media?"}
            answer={
              "Absolutely! We create and edit engaging videos for platforms like Instagram, YouTube, and Facebook to help increase your reach and engagement."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Faquestions;
