import React, { useState } from "react";
import CtaButton from "./CtaButton";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "./logo.png"
import "../components/list.css"
const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div className="w-full xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 shadow-lg relative secondary-font">
      {/* logo */}
      <a
        href="/"
        className="lg:text-1xl text-2xl tracking-wide font-light text-[#7A6960]"
      >
        <img className="logo-main" src={logo} alt="logo" />
      </a>
      {/* menu */}
      <div className="lg:flex items-center justify-between lg:gap-14 hidden">
        <a
          href="/"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          About
        </a>
        <a
          href="#services"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Services
        </a>
        {/* <a
          href="/portfolio"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Portfolio
        </a> */}

        <a
          href="#contact"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Contact
        </a>

        {/* CTA */}
        {/* <button className="bg-orange-600 text-lg text-slate-50 rounded-3xl px-4 py-1">
          Get Strated
        </button> */}
        <a href="#contact" className="">
          <CtaButton name={"Get Started"} />
        </a>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden ">
        <RxHamburgerMenu size={"28px"} onClick={clickHandler} />
      </div>

      {show && (
        <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-white transition-all duration-300">
          <a
            href="/"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Home
          </a>
          <a
            href="/#about"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            About
          </a>
          <a
            href="/#services"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Services
          </a>
          <a
            href="/#contact"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Contact
          </a>

          {/* CTA */}
          <a
            href="/#contact"
            className="mt-2 ml-2 flex justify-center items-center"
          >
            <CtaButton name={"Get Started"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
