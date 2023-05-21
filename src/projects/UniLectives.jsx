import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import unilectives from "../assets/unilectives.png";
import unilectivesold from "../assets/unilectivesold.png";
import unilectives01light from "../assets/unilectives01light.png";
import unilectives02light from "../assets/unilectives02light.png";
import unilectives03light from "../assets/unilectives03light.png";
import unilectives04light from "../assets/unilectives04light.png";
import unilectives05light from "../assets/unilectives05light.png";
import unilectives06light from "../assets/unilectives06light.png";

const UniLectives = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref6, inView6] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref7, inView7] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref8, inView8] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref9, inView9] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref10, inView10] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref11, inView11] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref12, inView12] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref13, inView13] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref14, inView14] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col place-items-center justify-center text-xl text-white">
      <div className="flex flex-col">
        <img
          src={unilectives}
          alt="Unilectives Mockup"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="flex max-w-screen-xl flex-col justify-center p-8">
        <div className="flex w-full flex-col space-y-8 py-16">
          <h1 className="text-6xl font-bold">UNI-LECTIVES</h1>
          <p className="text-2xl">
            Helps UNSW computer science students read course reviews to help them pick their own
            electives, or even wrote their own.
          </p>
        </div>
        <motion.div
          ref={ref1}
          className="grid grid-rows-1 gap-16 border-t py-16 md:grid-cols-2"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl font-bold">OVERVIEW</h1>
            <p>
              As a part of the internal UX/UI team, I was designated the task to create mockups for
              a new design for the previously named CSElectives website. The problems about the old
              website design included the colour palette and layout of the course cards.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl font-bold">ROLE</h1>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>UX/UI Designer: Prototyping & Testing</p>
            </div>
            <p className="italic">January 2023 - April 2023</p>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          className="space-y-8 border-t py-16"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-xl">OPPORTUNITY</h1>
            <h1 className="text-3xl font-bold">FIXING THE OLD DESIGN</h1>
          </div>
          <div className="space-y-2">
            <p>
              Revamping a website's design is no easy task, especially when faced with multiple
              issues that hindered the user experience. One such challenge was encountered while
              working on the current CSElectives website, which demanded an overhaul of its design.
            </p>
          </div>
        </motion.div>
        <motion.img
          ref={ref3}
          className="rounded-2xl"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          src={unilectivesold}
          alt="CSElectives Current Design"
        ></motion.img>
        <motion.div
          ref={ref4}
          className="space-y-8 py-16"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-row gap-4">
            <p>-</p>
            <p>
              Recognizing the need for a fresh and vibrant visual identity, I experimented with
              different color palettes, aiming to find a combination that would be visually
              appealing and enhance the user experience. Through iterative exploration, I discovered
              a selection of vibrant colors that conveyed energy and excitement.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <p>-</p>
            <p>
              To improve the course card layout and padding, I conducted user testing and gathered
              feedback from friends and members within the society. Based on their insights, I
              reimagined the layout, making it more readable and intuitive. Carefully implemented
              padding enhanced visual separation, resulting in a more engaging browsing experience.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref5}
          className="space-y-8 border-t py-16"
          initial="hidden"
          animate={inView5 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-xl">UI DESIGN</h1>
            <h1 className="text-3xl font-bold">THE NEW UNI-LECTIVES</h1>
          </div>
          <div className="space-y-2">
            <p>
              Fixing the old CSElectives website design involved creative experimentation,
              collaboration, and user-centered thinking. Through vibrant color palettes, and
              optimized course card layouts, we transformed the website into a visually appealing
              and user-friendly platform. This collaborative effort showcases the power of combining
              technical expertise with thoughtful visual design to create a cohesive and engaging
              web experience.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref6}
          className="flex flex-col space-y-4 pb-16"
          initial="hidden"
          animate={inView6 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={unilectives01light} alt="UniLectives Landing Page" className="rounded-2xl" />
          <h1 className="place-self-center text-xl font-bold">UniLectives Landing Page</h1>
        </motion.div>
        <motion.div
          ref={ref7}
          className="flex flex-col space-y-4 pb-16"
          initial="hidden"
          animate={inView7 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={unilectives02light} alt="UniLectives Search Courses" className="rounded-2xl" />
          <h1 className="place-self-center text-xl font-bold">UniLectives Search Courses</h1>
        </motion.div>
        <motion.div
          ref={ref8}
          className="flex flex-col space-y-4 pb-16"
          initial="hidden"
          animate={inView8 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <img
            src={unilectives03light}
            alt="UniLectives Extended Search Courses (Card View)"
            className="rounded-2xl"
          />
          <h1 className="place-self-center text-xl font-bold">
            UniLectives Extended Search Courses (Card View)
          </h1>
        </motion.div>
        <motion.div
          ref={ref9}
          className="flex flex-col space-y-4 pb-16"
          initial="hidden"
          animate={inView9 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <img
            src={unilectives04light}
            alt="UniLectives COMP1511 Review Modal"
            className="rounded-2xl"
          />
          <h1 className="place-self-center text-xl font-bold">
            UniLectives Extended Search Courses (List View)
          </h1>
        </motion.div>
        <motion.div
          ref={ref10}
          className="flex flex-col space-y-4 pb-16"
          initial="hidden"
          animate={inView10 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <img
            src={unilectives05light}
            alt="UniLectives COMP1511 Review Page"
            className="rounded-2xl"
          />
          <h1 className="place-self-center text-xl font-bold">UniLectives COMP1511 Review Page</h1>
        </motion.div>
        <motion.div
          ref={ref11}
          className="flex flex-col space-y-4 pb-16"
          initial="hidden"
          animate={inView11 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <img
            src={unilectives06light}
            alt="UniLectives COMP1511 Submit Review Modal"
            className="rounded-2xl"
          />
          <h1 className="place-self-center text-xl font-bold">
            UniLectives COMP1511 Submit Review Modal
          </h1>
        </motion.div>
        <motion.div
          ref={ref12}
          className="space-y-8 border-t py-16"
          initial="hidden"
          animate={inView12 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-xl">CONCLUSION + RETROSPECTIVE</h1>
            <h1 className="text-3xl font-bold">
              EMBRACING STAKEHOLDER COLLABORATION AND AGILE WORKFLOW
            </h1>
          </div>
          <p>
            Working closely with a stakeholder on the Uni-Lective website revamp was a pivotal
            moment for my professional growth. I learned the importance of effective communication,
            empathy, and agility in collaboration. This transformative project expanded my skill set
            as a UX/UI designer and allowed me to engage in an agile workflow.
          </p>
        </motion.div>
        <div className="flex flex-col items-center space-y-8 border-t pt-16 text-center text-3xl">
          <h1 className="font-bold">THANK YOU FOR READING! 🙌</h1>
          <p className="text-2xl">
            If you have any enquiries about this project, or want to grab a coffee, feel free to
            email me at ledanielhuynh@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniLectives;
