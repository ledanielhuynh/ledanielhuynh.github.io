import React, { useEffect } from "react";
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import AboutMe from "./pages/AboutMe";
import Rissk from "./projects/Rissk";
import Destinate from "./projects/Destinate";
import UniLectives from "./projects/UniLectives";
import Hold from "./projects/Hold";
import Footer from "./components/Footer";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const RouterComponent = process.env.NODE_ENV === "production" ? HashRouter : BrowserRouter;

  return (
    <RouterComponent>
      <div className="flex min-h-screen flex-col items-center justify-between font-tt font-light">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
          <Route exact path="/rissk" element={<Rissk />} />
          <Route exact path="/destinate" element={<Destinate />} />
          <Route exact path="/unilectives" element={<UniLectives />} />
          <Route exact path="/hold" element={<Hold />} />
        </Routes>
      </div>
      <div className="pt-16">
        <Footer />
      </div>
    </RouterComponent>
  );
};

export default App;
