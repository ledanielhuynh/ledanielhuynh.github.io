import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import x from "../assets/x.svg";
import arrowupright from "../assets/arrowupright.svg";
import resumePdf from "../assets/resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const openResume = () => {
    window.open(resumePdf, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-75 backdrop-blur rounded-b-2xl text-white">
      <div className="flex flex-row justify-between items-center max-w-screen-xl mx-auto px-12 py-6">
        <img
          src={logo}
          alt="D/H Logo"
          className="h-8 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
        <ul className="hidden md:flex gap-8 text-white font-bold text-xl">
          <li
            className={`p-2 ${
              location.pathname === "/work" ? "underline underline-offset-4 decoration-2" : ""
            }`}
          >
            <Link
              to="/work"
              className="hover:duration-400 ease-out hover:underline hover:underline-offset-4 hover:decoration-2"
            >
              WORK
            </Link>
          </li>
          <li
            className={`p-2 ${
              location.pathname === "/aboutme" ? "underline underline-offset-4 decoration-2" : ""
            }`}
          >
            <Link
              to="/aboutme"
              className="hover:duration-400 ease-out hover:underline hover:underline-offset-4 hover:decoration-2"
            >
              ABOUT ME
            </Link>
          </li>
          <li className="flex flex-row items-center border-2 border-zinc-500 rounded-full px-2 bg-transparent cursor-pointer hover:bg-zinc-600 hover:duration-300 ease-out">
            <span className="p-2" onClick={openResume}>
              RESUME
            </span>
            <img src={arrowupright} alt="Resume Link" className="text-white filter invert h-6" />
          </li>
        </ul>
        <div onClick={handleNav} className="block text-white filter invert md:hidden">
          {nav ? <img src={x} alt="Exit Menu" /> : <img src={menu} alt="Menu" />}
        </div>
        <ul
          className={`fixed left-0 top-0 w-3/5 h-screen bg-zinc-950 bg-opacity-95 ease-out duration-500 ${
            nav ? "" : "left-[-60%]"
          }`}
        >
          <div className="flex flex-row justify-between items-center max-w-screen-2xl mx-auto px-12 py-6">
            <img
              src={logo}
              alt="D/H Logo"
              className="h-8 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            />
          </div>
          <li className="font-bold px-12 py-6 border-y border-zinc-800">
            <Link to="/work">WORK</Link>
          </li>
          <li className="font-bold px-12 py-6 border-b border-zinc-800">
            <Link to="/aboutme">ABOUT ME</Link>
          </li>
          <li className="font-bold px-8 py-6 border-b border-zinc-800">
            <div className="flex flex-row items-center border-2 border-zinc-500 rounded-full px-2 w-fit">
              <span className="p-2" onClick={openResume}>
                RESUME
              </span>
              <img src={arrowupright} alt="Resume Link" className="text-white filter invert h-6" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
