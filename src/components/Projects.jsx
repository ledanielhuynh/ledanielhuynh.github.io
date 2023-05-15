import React from 'react';
import github from '../assets/github.svg';
import figma from '../assets/figma.svg';
import website from '../assets/website.png';
import unilectives from '../assets/unilectives.png';
import rissk from '../assets/rissk.png';
import destinate from '../assets/destinate.png';
import dailyui from '../assets/dailyui.png';

const ProjectCard = ({ number, category, image, logo, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='flex flex-col p-8 space-y-8 bg-zinc-900 rounded-2xl hover:bg-zinc-950 transition duration-300 ease-out'>
      <div className='flex flex-row justify-between items-center'>
        <div className='space-y-2'>
          <h1 className='font-bold text-4xl text-white'>{number}</h1>
          <h1 className='font-bold text-xl text-zinc-500'>{category}</h1>
        </div>
        <div className='w-16 h-16 bg-zinc-800 rounded-xl flex justify-center place-content-center p-4'>
          <img src={logo} alt={category} />
        </div>
      </div>
      <img src={image} alt={`${title} Mockup`} className='rounded-xl' />
      <div className='space-y-2'>
        <h1 className='font-bold text-3xl text-white'>{title}</h1>
        <ul className='md:text-lg text-base text-zinc-300'>{description}</ul>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <div className='flex flex-col space-y-12 justify-center items-center max-w-screen-xl'>
      <div className='space-y-4'>
        <h1 className='text-5xl text-white font-bold'>PROJECTS</h1>
        <ul className='md:text-xl text-lg text-zinc-300'>
          These projects are a reflection of the work I am most proud of throughout the years. Ranging from case competition case studies to UX/UI design projects, each one highlights my passion for technology, expertise in relevant software, and overall drive to create a positive impact.
        </ul>
      </div>
      <div className='space-y-4'>
        <div className='grid md:grid-cols-2 grid-rows-1 gap-4 max-w-screen-xl'>
          <ProjectCard
            number='01'
            category='SOFTWARE'
            logo={github}
            image={website}
            title='PORTFOLIO WEBSITE'
            description='A website that showcases my skills, projects, personality and achievements 
            with a visually appealing and responsive interface. Coded with Vite, React, and TailwindCSS.'
            link='https://github.com/ledanielhuynh/ledanielhuynh.github.io'
          />

          <ProjectCard
            number='02'
            category='UX/UI DESIGN'
            logo={figma}
            image={unilectives}
            title='UNI-LECTIVES'
            description="Collaboratively redesigned CSESoc's Uni-lectives, which offers UNSW computer 
            science students a platform where they can read and write reviews to aid in selecting their electives."
            link='https://ledanielhuynh.github.io/'
          />
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-4 max-w-screen-xl'>
          <ProjectCard
            number='03'
            category='CASE STUDY'
            logo={figma}
            image={rissk}
            title='RISSK.'
            description='An app that offers assistance to people with disabilities and their caregivers, covering their needs in natural disasters.'
            link='https://ledanielhuynh.github.io/'
          />

          <ProjectCard
           number='04'
           category='CASE STUDY'
           logo={figma}
           image={destinate}
           title='DESTINATE'
           description='An app that enables users to store and share recommendations conveniently, whilst gaining monetary rewards.'
           link='https://ledanielhuynh.github.io/'
          />
          <ProjectCard
            number='05'
            category='UX/UI DESIGN'
            logo={figma}
            image={dailyui}
            title='DAILY UI'
            description='A design challenge that presents daily prompts for designing user interfaces.'
            link='https://ledanielhuynh.github.io/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
