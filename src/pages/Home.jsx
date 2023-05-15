import React from 'react'

import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div className='pt-12 px-8 space-y-24'>
      <Hero />
      <Projects />
    </div>
  )
}

export default Home