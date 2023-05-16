import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import AboutMe from "./pages/AboutMe";
import Rissk from "./projects/Rissk";
import Destinate from "./projects/Destinate";
import Hold from "./projects/Hold";
import Brooks from "./projects/Brooks";
import PernodRicard from "./projects/PernodRicard";
import Footer from "./components/Footer";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <div className="flex min-h-screen flex-col items-center justify-between font-tt font-light">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
          <Route exact path="/rissk" element={<Rissk />} />
          <Route exact path="/destinate" element={<Destinate />} />
          <Route exact path="/hold" element={<Hold />} />
          <Route exact path="/brooks" element={<Brooks />} />
          <Route exact path="/pernodricard" element={<PernodRicard />} />
        </Routes>
      </div>
      <div className="pt-12">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
