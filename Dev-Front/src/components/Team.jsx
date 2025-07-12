import React, { useEffect } from "react";
import team1 from "../img/ImgSec/Dev.jpg";
import team2 from "../img/ImgSec/Lovedeep.png";
import team3 from "../img/ImgSec/Kawaldeep.jpeg";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// custom styles
import "./Team.css";
import TeamImage from "./TeamImage";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Team
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Our Mission is clear. We are building to train over 10 Crores Career
        Aspirants
      </p>

      <div className="flex flex-col xs:flex-row gap-6 p-5 lg:p-0 items-center">
        <TeamImage  image={team1} name={"Dev Pawar"} role={"Director"} />
        <TeamImage image={team2} name={"Lovedeep Singh"} role={"Managing Director "} />
        <TeamImage image={team3} name={"Kawaldeep Singh"} role={"CTO"} />
        {/* <TeamImage image={team4} name={"Amanda Jepson"} role={"Accountant"} /> */}
      </div>
    </div>
  );
};

export default Team;
