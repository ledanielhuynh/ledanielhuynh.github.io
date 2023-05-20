import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import destinate from "../assets/destinate.png";
import destinatepersona from "../assets/destinatepersona.png";
import destinatemockup00 from "../assets/destinatemockup00.png";
import destinatemockup01 from "../assets/destinatemockup01.gif";
import destinatemockup02 from "../assets/destinatemockup02.gif";
import destinatemockup03 from "../assets/destinatemockup03.gif";
import destinatemockup04 from "../assets/destinatemockup04.gif";
import destinatemockup05 from "../assets/destinatemockup05.gif";

const Destinate = () => {
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

  const [ref15, inView15] = useInView({
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
        <img src={destinate} alt="Rissk App Mockup" className="h-screen w-screen object-cover" />
      </div>
      <div className="flex max-w-screen-xl flex-col justify-center p-8">
        <div className="flex w-full flex-col space-y-8 py-16">
          <h1 className="text-6xl font-bold">DESTINATE</h1>
          <p className="text-2xl">
            At its core, DestinATE is an app that provides individuals a platform that easily stores
            and shares recommendations between trusted friends and family.
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
              As a part of Prodigi's Product Innovation Program, I worked with a team of students
              with set roles: Product Manager, Business Analyst and UX/UI Designers. The aim was to
              develop a digital strategy to better support restaurant operations and improve the
              customer service experience.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl font-bold">ROLE</h1>
            <div>
              <div className="flex flex-row gap-4">
                <p>-</p>
                <p>UX/UI Designer: User Research, Prototyping & Testing</p>
              </div>
            </div>
            <p className="italic">October 2022 - December 2022</p>
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
            Trusted recommendations are a vital component of customer decision making and the
            financial success of restaurants, however, this is not an accessible source of
            information. In light of this, the problem statement was:
          </p>
          <h1 className="text-center text-2xl font-bold">
            "How might we better support these restaurants and improve the customer decision-making
            experience with recommendations right now?"
          </h1>
          <p>
            By addressing this issue, the aim is to benefit both restaurants and customers by making
            reliable recommendations more readily available.
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
              THE DECISION-MAKING PROCESS FOR RESTAURANTS IS QUITE MESSY
            </h1>
          </div>
          <p>
            The customer decision-making experience in Sydney faces significant challenges, as there
            is currently no dedicated platform for sharing and storing recommendations from friends,
            beyond social media. Our research revealed that many university students receive
            recommendations in group chats or save them onto their camera roll, only to end up
            losing them. Moreover, the impact of COVID-19 has been detrimental, with{" "}
            <span className="font-semibold">90% of hospitality businesses in Sydney</span>{" "}
            experiencing reduced sales and customers. As a result, people have resorted to their
            favorite meals, bypassing the enjoyable process of discovering intriguing restaurants
            while strolling through the city. These statistics underscore the urgent need for an{" "}
            <span className="font-semibold">
              improved and user-friendly solution to enhance the customer decision-making experience
              in Sydney.
            </span>
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
              THE LIMITATIONS OF CURRENT PLATFORMS CALL FOR A MORE RELIABLE DIGITAL SOLUTION
            </h1>
          </div>
          <div className="space-y-2">
            <p>
              The current 'recommendation' platforms in Sydney have additional problems that affect
              the customer decision-making experience. Skewed reviews, where some restaurants
              incentivize customers to give them a 5-star rating on platforms like Google Reviews,
              undermine the authenticity and reliability of feedback. However, this presents an
              opportunity to create a digital solution that offers easy access to trustworthy
              recommendations from a close network of trusted friends and family. Such a platform
              would address the limitations of existing platforms, improve the customer experience,
              and ensure reliable and unbiased recommendations for users in Sydney.
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
            To better understand the preferences and needs of university students in NSW when it
            comes to restaurant recommendations, we conducted thorough user research. This involved
            interviewing and surveying a diverse group of students across the region. The findings
            from our research provided insightful statistics that guided the creation of an accurate
            user persona.
          </p>
          <p>
            Our research revealed that{" "}
            <span className="font-semibold">
              82% of surveyed student diners rely on online reviews and recommendations
            </span>
            , while{" "}
            <span className="font-semibold">
              78% are likely to choose a restaurant based on a friend's recommendation.
            </span>{" "}
            Moreover, a significant{" "}
            <span className="font-semibold">
              92% of consumers trust recommendations from friends, family, and trusted influencers
              more than other forms of marketing.
            </span>{" "}
            These statistics informed the development of a user persona that reflects the
            preferences and behaviors of university students seeking restaurant recommendations.
          </p>
        </motion.div>
        <motion.img
          ref={ref6}
          className="pb-16"
          initial="hidden"
          animate={inView6 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          src={destinatepersona}
          alt="DestinATE User Persona"
        ></motion.img>
        <div className="flex flex-col gap-16 py-16 border-t">
          <motion.div
            ref={ref7}
            className="space-y-8"
            initial="hidden"
            animate={inView7 ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-xl">SOLUTION</h1>
              <h1 className="text-3xl font-bold">INTRODUCING: DESTINATE</h1>
            </div>
            <h1 className="text-center text-2xl font-bold">
              At its core, DestinATE is an app that provides individuals a platform that easily
              stores and shares recommendations between trusted friends and family.
            </h1>
          </motion.div>
          <motion.img
            ref={ref8}
            className="rounded-2xl"
            initial="hidden"
            animate={inView8 ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
            src={destinatemockup00}
            alt="Rissk User Persona"
          ></motion.img>
        </div>
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
              ENSURING INDIVIDUALS LIKE GRACE AN IMPROVED DECISION-MAKING EXPERIENCE THROUGH
              RECOMMENDATIONS
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
          <img
            src={destinatemockup01}
            alt="DestinATE Login and Onboarding"
            className="w-4/5 place-self-center"
          />
          <div className="space-y-2 place-self-center">
            <h1 className="text-3xl font-bold">LOGIN AND ONBOARDING</h1>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Grace now can use the app, add her close friends, and view the recommendations they
                have already made.
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
            <h1 className="text-3xl font-bold">VIEWING AND SAVING RECOMMENDATIONS</h1>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Provides a user-friendly interface to view and save restaurant recommendations from
                friends, family, and trusted influencers.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Displays detailed information about recommended restaurants, including menus,
                operating hours, contact details, and recommendations from friends and public
                figures individuals follow.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Integrates social sharing functionality, enabling users to share their own
                recommendations with friends and followers, fostering a sense of community and
                shared experiences.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Now Grace has a platform that is tailored for her finding recommendations for the
                new experiences and restaurants she has been yearning for.
              </p>
            </div>
          </div>
          <img
            src={destinatemockup02}
            alt="DestinATE Viewing and Saving Recommendations"
            className="order-1 w-4/5 place-self-center md:order-2"
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
          <img
            src={destinatemockup03}
            alt="DestinATE Making A Recommendation"
            className="w-4/5 place-self-center"
          />
          <div className="space-y-2 place-self-center">
            <h1 className="text-3xl font-bold">MAKING RECOMMENDATIONS</h1>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Allows users to share their favorite dishes and provide short reviews to recommend
                restaurants to friends, family, and the community.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Provides a space for users to describe the reasons behind their recommendation,
                highlighting the unique aspects of the dish, such as taste, presentation, and flavor
                combinations.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Now Grace is able to see her friends' recommendations, and easily have access to the
                foods they enjoyed.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref13}
          className="grid grid-rows-1 gap-16 py-8 md:grid-cols-2"
          initial="hidden"
          animate={inView13 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="order-2 space-y-2 place-self-center md:order-1">
            <h1 className=" text-3xl font-bold">DISCOUNT TICKETS</h1>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Rewards users for actively participating in the recommendation community by offering
                discount tickets to selected restaurants.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Encourages users to explore new restaurants and try different cuisines by offering
                discount tickets for a diverse range of establishments.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Grace can now be rewarded for doing what she loves - sharing her beloved dining
                experiences with friends. On top of that, she is incentivised with discounts to new
                and similar dining experiences she has not recommended yet.
              </p>
            </div>
          </div>
          <img
            src={destinatemockup04}
            alt="DestinATE Discount Tickets"
            className="order-1 w-4/5 place-self-center md:order-2"
          />
        </motion.div>
        <motion.div
          ref={ref14}
          className="grid grid-rows-1 gap-16 pt-8 pb-16 md:grid-cols-2"
          initial="hidden"
          animate={inView14 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <img
            src={destinatemockup05}
            alt="DestinATE Viewing Saved Recommendations"
            className="w-4/5 place-self-center"
          />
          <div className="space-y-2 place-self-center">
            <h1 className="text-3xl font-bold">VIEWING SAVED RECOMMENDATIONS</h1>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Offers a visually appealing user interface to browse and view all the restaurants
                and dishes that the user has saved or recommended within the app.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Provides a seamless and accessible way for users to showcase the places they have
                hearted or recommended to others, making it easy to recall and share their favorite
                dining experiences.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Grace now has a list of her favourite dining experiences, and an accessible way to
                both share her recommendations to others or even recommend the restaurant again with
                the many other dishes she might try out.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref15}
          className="space-y-8 border-t py-16"
          initial="hidden"
          animate={inView15 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-xl">CONCLUSION + RETROSPECTIVE</h1>
            <h1 className="text-3xl font-bold">THE POWER OF COLLABORATIVE DESIGN AND INITIATIVE</h1>
          </div>
          <p>
            Designing the recommendation app marked a significant milestone in my growth as a UX/UI
            designer. Collaborating on Figma and utilizing design systems taught me the power of
            efficient workflows and design cohesion. Taking on additional responsibilities exposed
            me to the roles of a product manager and business analyst, broadening my understanding
            of cross-functional collaboration. This experience emphasized the importance of
            adaptability, autonomy, and a genuine passion for user-friendly design. Overall, the
            recommendation app project fueled my personal and professional growth, shaping me into a
            more self-motivated and adaptable designer.
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

export default Destinate;
