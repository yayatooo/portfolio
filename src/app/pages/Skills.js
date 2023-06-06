import React from "react";
import Marquee from "react-fast-marquee";
import { icons } from "../utility/data";

const Skills = () => {
  return (
    <section className="max-w-10/12 mx-auto py-8">
      <h1 className="w-10/12 mx-auto px-4 text-3xl font-poppins font-semibold text-primary">
        Tech Stack<span className="text-secondary">.</span>
      </h1>
      <div className="w-10/12 mx-auto flex items-center flex-nowrap gap-x-2 py-8 px-6">
        <Marquee speed={30} key={1}>
          {icons.map((data) => {
            return (
              <div
                key={data.id}
                className="aspect-square w-36 h-36 flex items-center overflow-hidden mobile:w-16 mobile:h-16 laptop:w-36 laptop:h-36"
              >
                <img
                  src={data.image}
                  alt={data.name}
                  className="p-7 w-full mobile:p-2 laptop:p-7"
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
