"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import Image from "next/image";
import { RiMenu3Fill, RiCloseLargeLine } from "react-icons/ri";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 1300px)",
  });
  console.log("header", header);
  console.log("nav", nav);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  });

  return (
    <div
      className={`fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 
      ${
        header
          ? " bg-white shadow-md py-2"
          : " bg-transparent shadow-none py-4 "
      }`}
    >
      <div className="flex flex-col mx-auto xl:container xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between px-4">
          <Link
            to="home"
            smooth={isTabletOrMobile}
            spy={true}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <Image src="/images/car_logo.png" width={70} height={50} alt="" />
            <span className="logo">Car Rental</span>
          </Link>
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? <RiCloseLargeLine /> : <RiMenu3Fill />}
          </div>
        </div>

        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-[700] text-center uppercase text-sm transition-all duration-150
           xl:flex-row xl:font-medium xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 xl:text-left xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="bg-pink-300 cursor-pointer xl:hidden"
            to="/"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            See All Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}