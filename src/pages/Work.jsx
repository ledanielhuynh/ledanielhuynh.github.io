import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import github from "../assets/github.svg";
import figma from "../assets/figma.svg";
import website from "../assets/website.png";
import unilectives from "../assets/unilectives.png";
import rissk from "../assets/rissk.png";
import wit from "../assets/wit.png";
import destinate from "../assets/destinate.png";
import dailyui from "../assets/dailyui.png";
import hold from "../assets/hold.png";

const projects = [
  {
    category: "FRONTEND",
    logo: github,
    image: website,
    title: "PORTFOLIO WEBSITE",
    description:
      "A website that showcases my skills, projects, personality, and achievements with a visually appealing and responsive interface. Coded with Vite, React, and TailwindCSS.",
    link: "https://github.com/ledanielhuynh/ledanielhuynh.github.io",
  },
  {
    category: "FRONTEND",
    logo: github,
    image: wit,
    title: "WIT EMP WEBSITE",
    description:
      "Collaboratively deployed the WIT EMP website to provide program mentees a centralized platform that updates them on upcoming events and mentors.. Coded with NextJS, ReactJS, HTML, CSS, and JavaScript.",
    link: "https://github.com/unswwit/emp-website",
  },
  {
    category: "UX/UI DESIGN",
    logo: figma,
    image: unilectives,
    title: "UNI-LECTIVES",
    description:
      "Redesigned CSESoc's Uni-lectives, which offers UNSW computer science students a platform where they can read and write reviews to aid in selecting their electives.",
    link: "/unilectives",
  },
  {
    category: "CASE STUDY",
    logo: figma,
    image: destinate,
    title: "DESTINATE",
    description:
      "An app that enables users to store and share recommendations conveniently, whilst gaining monetary rewards.",
    link: "/destinate",
  },
  {
    category: "CASE STUDY",
    logo: figma,
    image: rissk,
    title: "RISSK.",
    description:
      "An app that offers assistance to people with disabilities and their caregivers, covering their needs in natural disasters.",
    link: "/rissk",
  },
  {
    category: "CASE STUDY",
    logo: figma,
    image: hold,
    title: "HOLD",
    description:
      "Redesign Pearler's educational day-trading game, HOLD, to make the landing page more appealing, accessible, and consistent.",
    link: "/hold",
  },
  // {
  //   category: "UX/UI DESIGN",
  //   logo: figma,
  //   image: dailyui,
  //   title: "DAILY UI",
  //   description: "A design challenge that presents daily prompts for designing user interfaces.",
  //   link: "/dailyui",
  // },
];

const ProjectCard = ({ index, category, image, logo, title, description, link }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  const projectNumber = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex cursor-pointer flex-col space-y-8 rounded-2xl bg-zinc-900 p-8 transition duration-300 ease-out hover:bg-zinc-950"
      onClick={handleCardClick}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">{projectNumber}</h1>
          <h1 className="text-2xl font-bold text-zinc-500">{category}</h1>
        </div>
        <div className="flex h-16 w-16 place-content-center justify-center rounded-xl bg-zinc-800 p-4">
          <img src={logo} alt={category} />
        </div>
      </div>
      <img src={image} alt={`${title} Mock up`} className="rounded-xl" />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <ul className="text-lg text-zinc-300 md:text-xl">{description}</ul>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <div className="space-y-16 px-8 pt-28 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex max-w-screen-xl flex-col items-center justify-center space-x-8 rounded-2xl bg-zinc-900 p-10 md:flex-row md:p-16"
      >
        <div className="flex w-full flex-col space-y-8">
          <div className="text-5xl font-bold text-white md:text-6xl">
            <h1>PROJECTS</h1>
          </div>
          <ul className="text-xl text-zinc-300 md:text-2xl">
            Below consists of the work I am most proud of throughout the years. Ranging from case
            studies to UX/UI design projects, each one highlights my passion for technology,
            expertise in relevant software, and overall drive to create a positive impact.
          </ul>
        </div>
      </motion.div>

      <div className="flex max-w-screen-xl flex-col items-center justify-start space-y-12">
        <div className="space-y-4">
          <div className="grid max-w-screen-xl grid-rows-1 gap-4 md:grid-cols-3">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={`project-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="flex"
                >
                  <ProjectCard
                    index={index}
                    category={project.category}
                    logo={project.logo}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
