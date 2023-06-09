import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import rissk from "../assets/rissk.png";
import risskpersona from "../assets/risskpersona.png";
import iphone14 from "../assets/iphone14.png";

const Rissk = () => {
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
    threshold: 0.5,
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
    threshold: 0.5,
  });

  const [ref7, inView7] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref8, inView8] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const [ref9, inView9] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref10, inView10] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref11, inView11] = useInView({
    triggerOnce: true,
    threshold: 0.5,
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
        <img src={rissk} alt="Rissk App Mockup" className="h-screen w-screen object-cover" />
      </div>
      <div className="flex max-w-screen-xl flex-col justify-center p-8">
        <div className="flex w-full flex-col space-y-8 py-16">
          <h1 className="text-6xl font-bold">RISSK</h1>
          <p className="text-2xl">
            A two-part strategy that unifies innovative front-end digital services and back-end
            databases to mitigate the ‘RISSKs’ floods pose to people in need.
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
          <div className="flex flex-col space-y-8">
            <h1 className="text-3xl font-bold">OVERVIEW</h1>
            <p>
              As a part of Microsoft Protégé, I worked with a team as digital consultants to develop
              a digital strategy to address incident management in the event of natural disasters in
              Australia.
            </p>
            <p>
              Months after, I took on the task of approaching the project as a UX/UI designer, doing
              further relevant research to make the solution more user-oriented.
            </p>
          </div>
          <div className="flex flex-col space-y-8">
            <h1 className="text-3xl font-bold">ROLE</h1>
            <div>
              <div className="flex flex-row gap-4">
                <p>-</p>
                <p>Digital Consultant: Product Manager, Market Research, Competitor Analysis</p>
              </div>
              <div className="flex flex-row gap-4">
                <p>-</p>
                <p>UX/UI Designer: User Research, Prototyping & Testing</p>
              </div>
            </div>
            <p className="italic">May 2022 - June 2022</p>
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
          <h1 className="text-3xl font-bold">PROBLEM STATEMENT</h1>
          <p>
            The recent floods in Eastern Australia have highlighted the challenges faced by
            emergency services and the importance of disaster readiness. Recognizing the potential
            of technology and innovation, the problem statement was:
          </p>
          <h1 className="text-center text-2xl font-bold">
            "How might we leverage Microsoft’s technologies to develop a strategy to address
            incident management for people with disabilities and carers during floods?"
          </h1>
          <p>
            Extensive research and analysis led to the identification of this pressing issue and the
            formulation of the problem statement, which seeks to address the existing challenges in
            this domain using Microsoft's tools and solutions.
          </p>
        </motion.div>
        <motion.div
          ref={ref3}
          className="space-y-8 border-t py-16"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-xl">PROBLEM</h1>
            <h1 className="text-3xl font-bold">
              IMPACTS OF RECENT EXTREME FLOODING IN AUSTRALIA HAVE BEEN PROFOUND
            </h1>
          </div>
          <p>
            The impact of natural disasters can be devastating, particularly for vulnerable
            populations. In Australia, floods have caused the most significant damage, affecting{" "}
            <span className="font-semibold">21% of households</span> and leading to{" "}
            <span className="font-semibold">18,000 evacuations</span> in New South Wales alone
            during the heavy rain and flooding in February and March 2022. Our research revealed a
            disproportionate impact on people with disabilities and their carers, accounting for{" "}
            <span className="font-semibold">38% of those affected</span> - more than triple any
            other demographic. This disparity can be attributed to the{" "}
            <span className="font-semibold">
              lack of direct and targeted communication strategies in current evacuation plans for
              people with disabilities.
            </span>{" "}
            Thus, this issue at hand emphasises the urgent need to{" "}
            <span className="font-semibold">
              prioritize digital management and allocate appropriate resources to ensure inclusive
              services for all before, during and after floods.
            </span>{" "}
          </p>
        </motion.div>
        <motion.div
          ref={ref4}
          className="space-y-8 border-t py-16"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-xl">OPPORTUNITY</h1>
            <h1 className="text-3xl font-bold">
              CURRENT SOLUTIONS GIVE WAY TO OPPORTUNITIES FOR A MORE CENTRALISED AND DIGITISED
              STRATEGY
            </h1>
          </div>
          <div className="space-y-2">
            <p>
              Current evacuation plans fail to accomodate for the specific needs of people with
              disabilities. <span className="font-semibold">Prior to floods,</span> these
              individuals and their carers face immense challenges in locating the nearest and
              safest evacuation centre equipped to cater to their unique requirements.{" "}
              <span className="font-semibold">During floods,</span> both government and
              volunteer-run centres lack the necessary resources, volunteers, and services to
              provide appropriate assistance to individuals with disabilities. This systemic issue
              persists even <span className="font-semibold">after floods</span> subside, as
              community organizations and volunteers lack an efficient means of allocating the
              individual support and resources needed across affected regions. Moreover,
              government-run evacuation centres lack a centralized system to record and comprehend
              the diverse needs of individuals.
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
            <h1 className="text-xl">USER RESEARCH</h1>
            <h1 className="text-3xl font-bold">
              USING THE VOICES OF CARERS TO CONSTRUCT A USER PERSONA
            </h1>
          </div>
          <p>
            To gain a deeper understanding of the challenges faced by individuals with disabilities
            and their carers during flood events, we conducted desktop research, drawing insights
            from news articles and interviews. One interview conducted by ABC News stood out,
            featuring ToyNera, a dedicated mother. Her valuable insights shed light on the
            experiences and hardships she faced during a recent flood. ToyNera expressed deep
            frustration regarding the difficulties of meeting her son's specific needs, given his
            disability. Her sentiments seem to have strongly resonated with the broader challenges
            confronted by numerous carers in similar circumstances, which is why we based the user
            personas on her.
          </p>
          <p>
            ( The full article can be read{" "}
            <a
              href="https://www.abc.net.au/news/2022-03-11/flood-survivors-with-disability-need-urgent-housing-and-care/100899338"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              here
            </a>{" "}
            )
          </p>
        </motion.div>
        <motion.img
          ref={ref6}
          className="pb-16"
          initial="hidden"
          animate={inView6 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          src={risskpersona}
          alt="Rissk User Persona"
        ></motion.img>
        <motion.div
          ref={ref7}
          className="space-y-8 border-t py-16"
          initial="hidden"
          animate={inView7 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-xl">SOLUTION</h1>
            <h1 className="text-3xl font-bold">INTRODUCING: RISSK.</h1>
          </div>
          <h1 className="text-center text-2xl font-bold">
            RISSK is a two-part strategy that unifies innovative front-end digital services and
            back-end databases to mitigate the ‘RISSKs’ floods pose to people in need.
          </h1>
        </motion.div>
        <motion.img
          ref={ref8}
          className="pb-16"
          initial="hidden"
          animate={inView8 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          src={risskpersona}
          alt="Rissk User Persona"
        ></motion.img>
        <motion.div
          ref={ref9}
          className="space-y-8 border-t py-16"
          initial="hidden"
          animate={inView9 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-xl">PRODUCT DEMO</h1>
            <h1 className="text-3xl font-bold">
              RISSK. PROVIDES RESOURCES, INFORMATION, SERVICES, AND SUPPORT TO PEOPLE ON AN
              ACCESSIBLE PLATFORM.
            </h1>
          </div>
        </motion.div>
        <motion.div
          ref={ref10}
          className="grid grid-rows-1 gap-16 py-8 md:grid-cols-2"
          initial="hidden"
          animate={inView10 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={iphone14} alt="Rissk Mockup" className="w-3/5 place-self-center" />
          <div className="space-y-2 place-self-center">
            <h1 className="text-3xl font-bold">INFORMATION, WARNINGS & NOTIFICATIONS</h1>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Provide up-to-date information, warnings, and notifications related to flood
                incidents.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Users can receive real-time alerts about flood conditions, evacuation orders, road
                closures, and already available resources on preparing for floods to ensure their
                safety and preparedness.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref11}
          className="grid grid-rows-1 gap-16 py-8 md:grid-cols-2"
          initial="hidden"
          animate={inView11 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="order-2 space-y-2 place-self-center md:order-1 ">
            <h1 className="text-3xl font-bold">REAL-TIME INSIGHTS ON EVACUATION CENTRES</h1>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Provide real-time insights and updates about all nearby evacuation centres in the
                affected area.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>Recommends most appropriate locations based on individual user.</p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Users can access information on the nearest evacuation centers, their current
                capacity, available facilities, and any specific accommodations for people with
                disabilities and their carers.
              </p>
            </div>
          </div>
          <img
            src={iphone14}
            alt="Rissk Mockup"
            className="order-1 w-3/5 place-self-center md:order-2"
          />
        </motion.div>
        <motion.div
          ref={ref12}
          className="grid grid-rows-1 gap-16 py-8 md:grid-cols-2"
          initial="hidden"
          animate={inView12 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={iphone14} alt="Rissk Mockup" className="w-3/5 place-self-center" />
          <div className="space-y-2 place-self-center">
            <h1 className="text-3xl font-bold">“R U SAFE?” CRISIS RESPONSE</h1>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>Builds a public support network that brings the community together.</p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Digitises accessibility to organisations and volunteers that are willing to support.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Users can quickly communicate their safety status to their loved ones or emergency
                services.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref13}
          className="grid grid-rows-1 gap-16 pt-8 pb-16 md:grid-cols-2"
          initial="hidden"
          animate={inView13 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="order-2 space-y-2 place-self-center md:order-1">
            <h1 className=" text-3xl font-bold">PROFILES FOR PEOPLE WITH DISABILITIES</h1>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Enables users to create and manage personalized profiles within the app in order to
                present key medical information about their specific needs to volunteers at
                evacuation centres.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>Authentication through Medicare and Mobility Parking Permit.</p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Users can input their unique requirements, medical conditions, accessibility needs,
                emergency contacts, and any other relevant information.
              </p>
            </div>
          </div>
          <img
            src={iphone14}
            alt="Rissk Mockup"
            className="order-1 w-3/5 place-self-center md:order-2"
          />
        </motion.div>
        <motion.div
          ref={ref14}
          className="space-y-8 border-t py-16"
          initial="hidden"
          animate={inView14 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-xl">CONCLUSION + RETROSPECTIVE</h1>
            <h1 className="text-3xl font-bold">NAVIGATING INDIVIDUAL GROWTH</h1>
          </div>
          <p>
            Working on the RISSK project again as a UX/UI designer allowed me to work independently,
            embrace autonomy, and prioritize user-centric design. I learned the importance of
            self-motivation, clear goals, and adaptability in this process. The project revealed the
            distinction between consulting and UX/UI design, emphasizing user needs over financial
            or technological constraints. Overall, RISSK showcased the value of autonomy,
            adaptability, and genuine passion for user-friendly design.
          </p>
        </motion.div>
        <div className="flex flex-col space-y-8 border-t pt-16 items-center text-3xl text-center">
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

export default Rissk;
