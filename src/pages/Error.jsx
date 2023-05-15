import React from "react";
import danielsad from "../assets/danielsad.png";

const Error = () => {
  return (
    <div className="flex flex-col justify-center place-items-center text-white">
      <div className="flex flex-row justify-center place-items-center">
        <h1 className="text-[200px]">4</h1>
        <img src={danielsad} alt="Daniel Memoji" className="w-48" />
        <h1 className="text-[200px]">4</h1>
      </div>
      <h2 className="text-6xl">Page not found</h2>
      <p className="text-2xl pt-8 text-center">
        The page you're looking for has either vanished into the digital<br></br>
        abyss or in the land of procrastination. Hopefully I can address<br></br>
        the issue soon! 🫡
      </p>
    </div>
  );
};

export default Error;
