"use client";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-10/12 mx-auto pt-32">
        <motion.div
          initial={{ x: -550 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-10/12 mx-auto px-16"
          name="home"
        >
          <h1 className="font-shellhead font-semibold text-primary text-4xl mobile:text-lg mobile:text-center laptop:text-4xl laptop:text-left">
            Hello Mate ! <span className="text-secondary">I'm</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-10/12 pt-3 flex flex-col text-center mx-auto"
        >
          <h1 className="font-shellhead text-10xl text-primary mobile:text-6xl laptop:text-10xl">
            RAHMAT HIDAYAT
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: 850 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-10/12 mx-auto px-16 text-right"
        >
          <h1 className="font-shellhead font-semibold text-primary text-4xl mobile:text-sm mobile:text-center laptop:text-4xl laptop:text-right">
            FRONTEND <span className="text-secondary">DEVELOPER</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: -10000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="py-8 mx-auto w-full"
        >
          <img src="./hero.png" className="wide:w-full" />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
