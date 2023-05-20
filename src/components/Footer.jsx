import React from "react";
import daniellaptop from "../assets/daniellaptop.png";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";

const Footer = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/le-daniel-huynh/", "_blank");
  };

  const sendEmail = () => {
    window.open("mailto:ledanielhuynh@gmail.com", "_blank");
  };

  return (
    <footer className="w-full rounded-t-2xl bg-black bg-opacity-75 text-white text-center">
      <div className="mx-auto max-w-screen-xl grid grid-cols-3 place-items-center">
        <div></div>
        <div className="flex flex-col items-center justify-center space-y-8 py-12">
          <h1 className="text-lg text-zinc-300 md:text-xl">Interested in working together?</h1>
          <h1 className="text-lg font-bold md:text-xl">LET'S CONNECT!</h1>
          <div className="flex items-center justify-center space-x-4">
            <button
              className="rounded-xl bg-zinc-800 p-4 transition duration-300 ease-out hover:bg-zinc-600"
              onClick={sendEmail}
            >
              <img src={email} alt="Email" />
            </button>
            <button
              className="rounded-xl bg-zinc-800 p-4 transition duration-300 ease-out hover:bg-zinc-600"
              onClick={openLinkedIn}
            >
              <img src={linkedin} alt="LinkedIn" />
            </button>
          </div>
          <p className="text-sm text-zinc-300 md:text-base">
            &copy; 2023 Daniel Huynh. All Rights Reserved.
          </p>
        </div>
        <div className="place-items-center">
          <img src={daniellaptop} alt="Daniel Memoji" className="w-3/4 opacity-0 md:opacity-100" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
