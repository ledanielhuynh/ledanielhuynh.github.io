import React from "react";

import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="space-y-12 px-8 pt-36">
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
