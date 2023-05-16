import React from "react";
import danielsad from "../assets/danielsad.png";

const Error = () => {
  return (
    <div className="flex flex-col place-items-center justify-center font-medium text-white">
      <div className="flex flex-row place-items-center justify-center">
        <h1 className="text-[200px]">4</h1>
        <img src={danielsad} alt="Daniel Memoji" className="w-48" />
        <h1 className="text-[200px]">4</h1>
      </div>
      <h2 className="text-6xl">Page not found</h2>
      <p className="pt-8 text-center text-2xl">
        The page you're looking for has vanished into either the digital<br></br>
        abyss or the land of procrastination. Hopefully I can address<br></br>
        the issue soon! 🫡
      </p>
    </div>
  );
};

export default Error;
