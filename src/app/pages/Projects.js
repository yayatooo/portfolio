"use client";
import React from "react";
import { projects } from "../utility/data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      // viewport={{ once: false, amount: 0.5 }}
      className="max-w-10/12 text-primary py-16 "
      name="projects"
    >
      <h1 className="w-10/12 mx-auto px-4 text-3xl font-poppins font-semibold text-primary">
        Projects<span className="text-secondary">.</span>
      </h1>
      <p className="w-10/12 mx-auto px-4 text-xl font-poppins font-light text-primary py-2">
        Some Projects that I'm Proud Of
      </p>
      <div className="w-10/12 flex py-12 gap-4 flex-wrap justify-center mx-auto mobile:flex-col laptop:flex-row">
        {projects.map((data, i) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex h-full w-3/12 flex-col p-6 cursor-pointer items-start rounded-md border border-primary mobile:w-full laptop:w-3/12 mx-0"
              key={i}
            >
              <h1 className="font-semibold text-lg">{data.tittle}</h1>
              <p className="font-reguler text-xs text-gray-400 py-1">
                {data.desc}
              </p>
              <div>
                <h1 className="w-full font-poppins font-semibold gap-x-2">
                  {data.tech}
                </h1>
              </div>
              <img src={data.image} className="py-1 rounded-lg" />
              <div className="flex gap-x-2 pt-2 font-poppins font-semibold">
                <button className="hover:text-secondary">
                  <a href={data.link}>Repository</a>
                </button>
                <button className="hover:text-secondary">
                  <a href={data.live}>Live Code</a>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
