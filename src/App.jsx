import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

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
      <div className='flex flex-col justify-between min-h-screen space-y-24 items-center font-tt'>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/work' element={<Work />} />
          <Route exact path='/aboutme' element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
