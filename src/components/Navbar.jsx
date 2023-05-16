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
    <nav className="fixed left-0 top-0 w-full rounded-b-2xl bg-black bg-opacity-80 text-white backdrop-blur-lg">
      <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-between px-12 py-6">
        <img
          src={logo}
          alt="D/H Logo"
          className="h-8 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
        <ul className="hidden gap-8 text-xl font-bold text-white md:flex">
          <li
            className={`p-2 ${
              location.pathname === "/work" ? "underline decoration-2 underline-offset-4" : ""
            }`}
          >
            <Link
              to="/work"
              className="hover:duration-400 ease-out hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              WORK
            </Link>
          </li>
          <li
            className={`p-2 ${
              location.pathname === "/aboutme" ? "underline decoration-2 underline-offset-4" : ""
            }`}
          >
            <Link
              to="/aboutme"
              className="hover:duration-400 ease-out hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              ABOUT ME
            </Link>
          </li>
          <li className="flex cursor-pointer flex-row items-center rounded-full border-2 border-zinc-500 bg-transparent px-2 ease-out hover:bg-zinc-600 hover:duration-300">
            <span className="p-2" onClick={openResume}>
              RESUME
            </span>
            <img src={arrowupright} alt="Resume Link" className="h-6 text-white invert filter" />
          </li>
        </ul>
        <div onClick={handleNav} className="block text-white invert filter md:hidden">
          {nav ? <img src={x} alt="Exit Menu" /> : <img src={menu} alt="Menu" />}
        </div>
        <ul
          className={`fixed left-0 top-0 h-screen w-3/5 bg-zinc-950 bg-opacity-95 duration-500 ease-out ${
            nav ? "" : "left-[-60%]"
          }`}
        >
          <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-12 py-6">
            <img
              src={logo}
              alt="D/H Logo"
              className="h-8 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            />
          </div>
          <li className="border-y border-zinc-800 px-12 py-6 font-bold">
            <Link to="/work">WORK</Link>
          </li>
          <li className="border-b border-zinc-800 px-12 py-6 font-bold">
            <Link to="/aboutme">ABOUT ME</Link>
          </li>
          <li className="border-b border-zinc-800 px-8 py-6 font-bold">
            <div className="flex w-fit flex-row items-center rounded-full border-2 border-zinc-500 px-2">
              <span className="p-2" onClick={openResume}>
                RESUME
              </span>
              <img src={arrowupright} alt="Resume Link" className="h-6 text-white invert filter" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
