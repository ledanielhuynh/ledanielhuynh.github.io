import React from "react";
import danielhello from "../assets/danielhello.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="flex max-w-screen-xl flex-col items-center justify-center space-x-4 rounded-2xl bg-zinc-900 px-12 md:flex-row md:px-16">
      <div className="flex w-full flex-col space-y-8 py-8 md:w-2/3 md:py-12">
        <div className="text-6xl font-bold text-white">
          <div className="flex h-32 items-center md:h-16">
            <Typewriter
              options={{
                strings: ["HELLO!", "XIN CHÀO!", "안녕하세요!", "こんにちは!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <h1>DANIEL HERE!</h1>
        </div>
        <ul className="text-lg text-zinc-300 md:text-xl">
          {" "}
          I am currently a Computer Science student at UNSW who is aspiring to become a unicorn
          developer! In saying this, I am looking to pursue a career in product design and/or
          front-end development.
        </ul>
      </div>
      <img src={danielhello} alt="Daniel Memoji" className="w-full md:h-1/3 md:w-1/3" />
    </div>
  );
};

export default Hero;
