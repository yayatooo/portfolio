"use client";
import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";

const About = () => {
  const rated = [
    {
      id: 1,
      title: "Projects Completed",
      rating: 15,
      image: "./tech/thumbs-up.svg",
    },
    {
      id: 2,
      title: "Cup of Coffe",
      rating: 7346,
      image: "./tech/coffee.svg",
    },
    {
      id: 3,
      title: "Friends Appreciate",
      rating: 12,
      image: "./tech/users.svg",
    },
    {
      id: 3,
      title: "Certificate",
      rating: 4,
      image: "./tech/award.svg",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.5 }}
      className="max-w-10/12 text-primary py-16"
      name="about"
    >
      <h1 className="w-10/12 mx-auto px-4 text-3xl font-poppins font-semibold text-primary">
        About Me<span className="text-secondary">.</span>
      </h1>
      <div className="w-10/12 flex mx-auto items-center py-8 gap-x-8 mobile:flex-col gap-x-8 laptop:flex-row">
        <div className="w-6/12 bg-secondary rounded-full">
          <img src="./assets/profile.png" />
        </div>
        <div className="flex flex-col gap-y-4 items-start">
          <p className="text-justify text-lg font-poppins">
            {`" Hi! my name is Rahmat Hidayat u can call me yato too. i'm frontend
            developer who love to create beautiful and attractive web design,
            since i learn about frontend i really enjoyed my development skills,
            struggle to solve code, confusing and the error specially. when i
            enjoy that stuff it just make me curious about tech for future and
            ready to explore new technologies and staying up-to-date in frontend
            development "`}
          </p>
          <div className="flex items-start w-full items-center gap-x-4">
            <button className="w-2/12 bg-secondary rounded-full text-black-primary py-3 px-6 font-semibold mobile:w-full laptop:w-2/12">
              <a href="https://www.cakeresume.com/pdf/s--_cEhGO-rE-eEGm-dRlESYg--/5EYWk.pdf">
                Download CV
              </a>
            </button>
            <div className="w-9/12 h-1 bg-secondary mobile:hidden laptop:block"></div>
            <a href="https://t.me/yayatoooo">
              <img src="./tech/mail.svg" />
            </a>
            <a href="https://github.com/yayatooo">
              <img src="./tech/github.svg" />
            </a>
          </div>
        </div>
      </div>

      <Skills />
    </motion.section>
  );
};

export default About;
