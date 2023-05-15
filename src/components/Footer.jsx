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
    <footer className="w-full bg-black bg-opacity-75 rounded-t-2xl text-white">
      <div className="grid grid-cols-3 place-items-center max-w-screen-xl mx-auto">
        <section></section>
        <section className="flex flex-col justify-center items-center py-12 space-y-4">
          <h1 className="md:text-lg text-base text-center text-zinc-300">
            Interested in working together?
          </h1>
          <h1 className="md:text-lg text-base text-center font-bold">LET'S CONNECT!</h1>
          <div className="flex flex-row justify-center items-center space-x-4">
            <button
              className="p-4 bg-zinc-800 rounded-xl hover:bg-zinc-600 transition duration-300 ease-out"
              onClick={sendEmail}
            >
              <img src={email} alt="Email" />
            </button>
            <button
              className="p-4 bg-zinc-800 rounded-xl hover:bg-zinc-600 transition duration-300 ease-out"
              onClick={openLinkedIn}
            >
              <img src={linkedin} alt="LinkedIn" />
            </button>
          </div>
          <ul className="md:text-base text-sm text-center text-zinc-300">
            © 2023 Daniel Huynh. All Rights Reserved.
          </ul>
        </section>
        <section className="place-items-center">
          <img src={daniellaptop} alt="Daniel Memoji" className="w-3/4 md:opacity-100 opacity-0" />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
