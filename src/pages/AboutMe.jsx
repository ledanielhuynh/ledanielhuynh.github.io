import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import danielreal from "../assets/danielreal.png";
import photo01 from "../assets/photo01.jpg";
import photo02 from "../assets/photo02.jpg";
import photo03 from "../assets/photo03.jpg";
import photo04 from "../assets/photo04.jpg";
import photo05 from "../assets/photo05.jpg";
import photo06 from "../assets/photo06.jpg";
import photo07 from "../assets/photo07.jpg";
import photo08 from "../assets/photo08.jpg";
import photo09 from "../assets/photo09.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";
import photo13 from "../assets/photo13.jpg";
import photo14 from "../assets/photo14.jpg";
import photo15 from "../assets/photo15.jpg";
import photo16 from "../assets/photo16.jpg";
import photo17 from "../assets/photo17.jpg";

const AboutMe = () => {
  const items = [
    { id: 1, src: photo01 },
    { id: 2, src: photo02 },
    { id: 3, src: photo03 },
    { id: 4, src: photo04 },
    { id: 5, src: photo05 },
    { id: 6, src: photo06 },
    { id: 7, src: photo07 },
    { id: 8, src: photo08 },
    { id: 9, src: photo09 },
    { id: 10, src: photo10 },
    { id: 11, src: photo11 },
    { id: 12, src: photo12 },
    { id: 13, src: photo13 },
    { id: 14, src: photo14 },
    { id: 15, src: photo15 },
    { id: 16, src: photo16 },
    { id: 17, src: photo17 },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-16">
      <div className="space-y-16 px-8 pt-28 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex max-w-screen-xl flex-col items-center justify-center gap-8 rounded-2xl bg-zinc-900 p-12 md:flex-row md:gap-16 md:p-16"
        >
          <div className="flex w-full flex-col space-y-8 md:w-2/3">
            <div className="text-5xl font-bold text-white md:text-6xl">
              <h1>A LITTLE ABOUT ME</h1>
            </div>
            <ul className="text-xl text-zinc-300 md:text-2xl">
              I'm a Computer Science student at UNSW, and my goal is to become a unicorn developer.
              But what does this mean? I want to be really good at both designing beautiful user
              interfaces and bringing them to life through frontend development. I believe in
              creating digital solutions that are not only functional but also user-friendly and
              visually appealing. I'm all about making technology more human-centric and sharing my
              fascination towards technology to everyone.
            </ul>
            <ul className="text-xl text-zinc-300 md:text-2xl">
              But that's not all there is to me! When I'm not coding, I enjoy indulging in my other
              creative hobbies:
            </ul>
          </div>
          <img src={danielreal} alt="Daniel Memoji" className="w-full md:h-1/3 md:w-1/3" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="m:p-16 flex max-w-screen-xl flex-col gap-8 rounded-2xl bg-zinc-900 p-12"
        >
          <div className="text-4xl font-bold text-white">
            <h1>I HAVE A PODCAST 🎙️</h1>
          </div>
          <ul className="text-xl text-zinc-300 md:text-2xl">
            In mid-2022, my friend and I decided to launch our very own podcast for the modern
            Australian-Asian. We found that in Australia, there is little representation for asians
            in the media, and we wanted to provide a platform to talk about anything we were
            passionate about as well as experiences/topics that were both common/avoided across
            Asian-Australian households. Here's our latest (and my personal favourite) episode:
          </ul>
          <div class="aspect-h-5 aspect-w-16">
            <iframe
              src="https://open.spotify.com/embed/episode/2b2P825DuDH5zjue41qRms?utm_source=generator&theme=0&t=0"
              frameborder="0"
              allowfullscreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="m:p-16 flex max-w-screen-xl flex-col gap-8 rounded-2xl bg-zinc-900 p-12"
        >
          <div className="text-4xl font-bold text-white">
            <h1>I ENJOY CREATING CINEMATIC EDITS 🎥</h1>
          </div>
          <ul className="text-xl text-zinc-300 md:text-2xl">
            I love delving into the world of video editing, where I can bring together visuals,
            sounds, and narratives to create captivating and engaging stories that leave a lasting
            impact. Not only this, but romanticising my life and recording its moments makes me feel
            like I am living in a movie - a movie that can be relived through camera roll videos and
            personal edits:
          </ul>
          <div class="aspect-h-9 aspect-w-16">
            <iframe
              src="https://www.youtube.com/embed/fjiky_OWwlE"
              frameborder="0"
              allowfullscreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="m:p-16 flex max-w-screen-xl flex-col gap-8 rounded-2xl bg-zinc-900 p-12"
        >
          <div className="text-3xl font-bold text-white md:text-4xl">
            <h1>I ALSO ENJOY PHOTOGRAPHING LANDSCAPES AND SCENERIES 📷</h1>
          </div>
          <ul className="text-xl text-zinc-300 md:text-2xl">
            Photography quickly became a cherished hobby when I first got my hands on an iPod with a
            camera. Capturing landscapes and scenic views sparked my excitement, driving me to
            invest in a Sony a7III. I enjoy immersing myself in exploring scenic landscapes,
            freezing moments and sharing them with others. So here's me sharing to you some of my
            favourite photos while travelling:
          </ul>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layoutId={item.id}
                onClick={() => setSelectedId(item.id)}
                className="aspect-h-9 aspect-w-16 relative"
              >
                <img
                  src={item.src}
                  alt={`Photo ${item.id}`}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
