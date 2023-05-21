import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import hold from "../assets/hold.png";
import holdold from "../assets/holdold.png";
import risskpersona from "../assets/risskpersona.png";
import iphone14 from "../assets/iphone14.png";

const Hold = () => {
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
    threshold: 0.5,
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
        <img src={hold} alt="Hold Mockup" className="h-screen w-screen object-cover" />
      </div>
      <div className="flex max-w-screen-xl flex-col justify-center p-8">
        <div className="flex w-full flex-col space-y-8 py-16">
          <h1 className="text-6xl font-bold">HOLD</h1>
          <p className="text-2xl">
            HOLD focuses on educating the general public about the differences in outcome between
            day-trading (buying and selling stocks quite frequently) vs a buy-and-hold approach
            (buying stocks up front and then holding them fo ra long time with limited to no
            selling).
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
              This was my first design task for a full-time UX/Graphic Designer role. It involved
              redesigning the HOLD page that they provided, looking to make the page more appealing,
              accessible, and consistent.
            </p>
          </div>
          <div className="flex flex-col space-y-8">
            <h1 className="text-3xl font-bold">ROLE</h1>
            <div>
              <div className="flex flex-row gap-4">
                <p>-</p>
                <p>UX/UI Designer: User Research, Prototyping</p>
              </div>
            </div>
            <p className="italic">March 2023</p>
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
            <h1 className="text-xl">BACKGROUND + THE TASK</h1>
            <h1 className="text-3xl font-bold">FIXING THE OLD DESIGN</h1>
          </div>
          <div className="space-y-2">
            <p>
              Pearler currently has an educational game that focuses on educating the general public
              about the differences in outcome between day-trading (buying and selling stocks quite
              frequently) vs a buy-and-hold approach (buying stocks up front and then holding them
              for a long time with limited to no selling).
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
          src={holdold}
          alt="Current HOLD Design"
        ></motion.img>
        <motion.div
          ref={ref4}
          className="space-y-8 py-16"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <p>The task was to redesign this “page”. The objectives of the design task were to:</p>
          <div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>
                Provide greater consistency of design between the hold game and the general Pearler
                aesthetic.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>Make the landing page far more appealing, accessible, excitable.</p>
            </div>
            <div className="flex flex-row gap-4">
              <p>-</p>
              <p>Maintain the “retro”-ish feel that comes from old school simple video games.</p>
            </div>
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
            <h1 className="text-xl">FINAL PRODUCT</h1>
            <h1 className="text-3xl font-bold">THE REFINED HOLD</h1>
          </div>
          <motion.div
            ref={ref6}
            className="aspect-h-9 aspect-w-16"
            initial="hidden"
            animate={inView6 ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlTAcdy374kIZjqnTOC8y2V%2FHOLD%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D25-129%26viewport%3D1757%252C917%252C0.17%26scaling%3Dmin-zoom%26starting-point-node-id%3D144%253A95"
              frameborder="0"
              allowfullscreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </motion.div>
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

export default Hold;
