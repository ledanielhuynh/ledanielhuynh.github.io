import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import github from "../assets/github.svg";
import figma from "../assets/figma.svg";
import website from "../assets/website.png";
import unilectives from "../assets/unilectives.png";
import rissk from "../assets/rissk.png";
import destinate from "../assets/destinate.png";
import dailyui from "../assets/dailyui.png";
import wit from "../assets/wit.png";
import pearler from "../assets/pearler.png";

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
      "Collaboratively deployed the WIT Empowerment Mentoring Program website to update program participants on upcoming events and mentors.",
    link: "https://github.com/unswwit/emp-website",
  },
  {
    category: "CASE STUDY",
    logo: figma,
    image: rissk,
    title: "RISSK.",
    description:
      "An app that offers assistance to people with disabilities and their caregivers, covering their needs in natural disasters.",
    link: "https://www.figma.com/proto/3gEb7AjZCl4C6Dy1BvXAWI/RISSK?page-id=143%3A1735&type=design&node-id=143-1737&viewport=986%2C656%2C0.88&scaling=min-zoom&starting-point-node-id=143%3A1737&show-proto-sidebar=1",
  },
  {
    category: "CASE STUDY",
    logo: figma,
    image: destinate,
    title: "DESTINATE",
    description:
      "An app that enables users to store and share recommendations conveniently, whilst gaining monetary rewards.",
    link: "https://www.figma.com/proto/RsfnPghJCn86WPOHGsLTVk/DESTINATE?page-id=1%3A1773&type=design&node-id=1-1780&viewport=1359%2C616%2C0.49&scaling=min-zoom&starting-point-node-id=1%3A1780&show-proto-sidebar=1",
  },
  {
    category: "CASE STUDY",
    logo: figma,
    image: pearler,
    title: "HOLD",
    description:
      "Redesign Pearler's educational day-trading game, HOLD, to make the landing page more appealing, accessible, and consistent.",
    link: "https://www.figma.com/proto/lTAcdy374kIZjqnTOC8y2V/HOLD?page-id=202%3A30&type=design&node-id=202-32&viewport=1069%2C790%2C0.76&scaling=min-zoom&starting-point-node-id=202%3A32&show-proto-sidebar=1",
  },
  {
    category: "UX/UI DESIGN",
    logo: figma,
    image: unilectives,
    title: "UNI-LECTIVES",
    description:
      "Redesigned CSESoc's Uni-lectives, which offers UNSW computer science students a platform where they can read and write reviews to aid in selecting their electives.",
    link: "https://www.figma.com/file/h2OXZG9l4nfVZCmzDt72r1/UNI-LECTIVES?type=design&node-id=0%3A1&t=geO8JeG9LtO0oD54-1",
  },
  {
    category: "UX/UI DESIGN",
    logo: figma,
    image: dailyui,
    title: "DAILY UI",
    description: "A design challenge that presents daily prompts for designing user interfaces.",
    link: "https://ledanielhuynh.github.io/",
  },
];

const ProjectCard = ({ index, category, image, logo, title, description, link }) => {
  const handleCardClick = () => {
    window.open(link, "_blank");
  };

  const projectNumber = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col p-8 space-y-8 bg-zinc-900 rounded-2xl hover:bg-zinc-950 transition duration-300 ease-out cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="space-y-2">
          <h1 className="font-bold text-4xl text-white">{projectNumber}</h1>
          <h1 className="font-bold text-xl text-zinc-500">{category}</h1>
        </div>
        <div className="w-16 h-16 bg-zinc-800 rounded-xl flex justify-center place-content-center p-4">
          <img src={logo} alt={category} />
        </div>
      </div>
      <img src={image} alt={`${title} Mockup`} className="rounded-xl" />
      <div className="space-y-2">
        <h1 className="font-bold text-3xl text-white">{title}</h1>
        <ul className="md:text-lg text-base text-zinc-300">{description}</ul>
      </div>
    </motion.div>
  );
};

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setSelectedCategory("");
    setShowCards(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowCards(true);
    }, 500);
  }, [selectedCategory, selectedSection]);

  const filteredProjects =
    selectedCategory === ""
      ? selectedSection === ""
        ? projects
        : projects.filter((project) => project.section === selectedSection)
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-col space-y-12 justify-start items-center max-w-screen-xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex"
      >
        <div className="space-x-4 justify-center items-center md:px-16 px-12 max-w-screen-xl bg-zinc-900 rounded-2xl">
          <div className="flex flex-col space-y-8 md:py-12 py-8 w-full">
            <div className="text-6xl text-white font-bold">
              <h1>PROJECTS</h1>
            </div>
            <ul className="md:text-xl text-lg text-zinc-300">
              Below consist of the work I am most proud of throughout the years. Ranging from case
              studies to UX/UI design projects, each one highlights my passion for technology,
              expertise in relevant software, and overall drive to create a positive impact.
            </ul>
          </div>
        </div>
      </motion.div>
      <div className="space-y-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-4 max-w-screen-xl">
          <AnimatePresence>
            {showCards &&
              filteredProjects.map((project, index) => (
                <motion.div
                  key={"project-${index}"}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="flex"
                >
                  <ProjectCard
                    index={index}
                    category={project.category}
                    section={project.section}
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
  );
};

export default AllProjects;
