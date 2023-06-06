"use client";
import React from "react";
import { experience } from "../utility/data";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.5 }}
      className="max-w-10/12 mx-auto py-16"
      name="experience"
    >
      <h1 className="w-10/12 mx-auto px-4 text-3xl font-poppins font-semibold text-primary">
        Experience<span className="text-secondary">.</span>
      </h1>
      <div className="py-12">
        {experience?.map((data, id) => {
          return (
            <div
              className="flex w-10/12 mx-auto justify-between px-4  mobile:flex-col laptop:flex-row"
              key={id}
            >
              <div className="w-5/12 flex flex-col gap-y-4 mobile:w-full laptop:w-5/12">
                <h1 className="text-lg font-poppins font-semibold text-secondary">
                  {data.company}
                </h1>
                <p className="text-base font-poppins font-light text-primary">
                  {data.exp}
                </p>
              </div>
              <div className="w-1 h-44 bg-secondary mobile:hidden laptop:inline-flex" />
              <div className="w-5/12 flex flex-col gap-y-4 mobile:w-full laptop:w-5/12">
                <h1 className="text-lg font-poppins font-semibold text-secondary">
                  {data.role}
                </h1>
                <p className="text-base font-poppins font-light text-primary">
                  {data.desc}
                </p>
                <div className="w-full h-1 bg-secondary laptop:hidden"></div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Experience;
