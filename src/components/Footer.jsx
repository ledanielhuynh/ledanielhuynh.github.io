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
    <footer className="w-full rounded-t-2xl bg-black bg-opacity-75 text-white">
      <div className="mx-auto grid max-w-screen-xl grid-cols-3 place-items-center">
        <section></section>
        <section className="flex flex-col items-center justify-center space-y-4 py-12">
          <h1 className="text-center text-base text-zinc-300 md:text-lg">
            Interested in working together?
          </h1>
          <h1 className="text-center text-base font-bold md:text-lg">LET'S CONNECT!</h1>
          <div className="flex flex-row items-center justify-center space-x-4">
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
          <ul className="text-center text-sm text-zinc-300 md:text-base">
            © 2023 Daniel Huynh. All Rights Reserved.
          </ul>
        </section>
        <section className="place-items-center">
          <img src={daniellaptop} alt="Daniel Memoji" className="w-3/4 opacity-0 md:opacity-100" />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
