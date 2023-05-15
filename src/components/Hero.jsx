import React from 'react'
import danielhello from '../assets/danielhello.png';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col space-x-4 justify-center items-center md:px-16 px-12 max-w-screen-xl bg-zinc-900 rounded-2xl'>
      <div className='flex flex-col space-y-8 md:py-12 py-8 md:w-2/3 w-full'>
        <div className='text-6xl text-white font-bold'>
          <div className='flex flex-row'>
            <Typewriter
              options={{
                strings: ['HELLO', 'XIN CHÀO', '안녕하세요', 'こんにちは'],
                autoStart: true,
                loop: true,
              }}
            />
            <p>,</p>
          </div>          
          <h1>DANIEL HERE!</h1>
        </div>
        <ul className='md:text-xl text-lg text-zinc-300'> I am currently a Computer Science student at UNSW who is aspiring to become a unicorn developer! In saying 
          this, I am looking to pursue a career in product design and/or front-end development.</ul>
      </div>
      <img src={danielhello} alt="Daniel Memoji" className='md:w-1/3 md:h-1/3 w-full' />
    </div>
  );
};

export default Hero