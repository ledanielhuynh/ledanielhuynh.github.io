import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col justify-between min-h-screen space-y-24 items-center font-tt'>
        <Navbar />
        <Routes>
        <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/work' element={< Work />}></Route>
          <Route exact path='/aboutme' element={< AboutMe />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;