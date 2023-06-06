"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { list } from "../utility/data";

const Navbar = () => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <>
      <nav className="w-full bg-black-primary/60 mx-auto fixed z-10 ">
        <div className="w-full flex justify-between items-center mx-auto backdrop-blur-sm py-6 mobile:px-6 tablet:px-14 laptop:px-32">
          <motion.h1
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-poppins font-semibold text-primary cursor-pointer"
          >
            <Link offset={-100} smooth={true} duration={500} to="home">
              Yato<span className="text-secondary">.</span>
            </Link>
          </motion.h1>
          <div className="flex gap-x-6 mobile:hidden laptop:flex">
            {list.map((data, i) => {
              return (
                <motion.ul
                  initial={{ x: 800 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className="flex font-poppins font-light text-primary cursor-pointer"
                  key={i}
                >
                  <li className="hover:text-secondary">
                    <Link
                      offset={-100}
                      smooth={true}
                      duration={500}
                      to={data.link}
                    >
                      {data.tittle}
                    </Link>
                  </li>
                </motion.ul>
              );
            })}
          </div>
          <button className="laptop:hidden" onClick={() => setOpenSide(true)}>
            <img src="./assets/menu.svg" />
          </button>
        </div>
        <Sidebar openSide={openSide} setOpenSide={setOpenSide} />
      </nav>
    </>
  );
};

export default Navbar;
