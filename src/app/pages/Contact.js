"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="w-full py-16 bg-primary">
      <div className="max-w-10/12 flex flex-col justify-center mx-auto text-center">
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="font-shellhead text-8xl text-black-primary py-8"
          name="contact"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="w-8/12 mx-auto font-poppins font-semibold"
        >
          {` I'm curently looking for job as Junior Frontend Developer, my inbox
          always Open. Whatever have a question or just to say hi, i'll try my
          best to get back to you`}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-1/12 mx-auto my-12 text-black-primary font-semibold py-3 px-6 rounded-lg border-2 border-black-primary mobile:w-5/12 laptop:w-2/12"
        >
          <a href="https://www.linkedin.com/in/rahmat-hidayat-2113a51a3/">
            Say Hi!
          </a>
        </motion.button>
      </div>
    </section>
  );
};

export default Contact;
