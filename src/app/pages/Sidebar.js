import classname from "classname";
// import React, { useState } from "react";
import { Link } from "react-scroll";
import { list } from "../utility/data";

const Sidebar = ({ openSide, setOpenSide }) => {
  const clickMenu = () => {
    setOpenSide(false);
  };

  return (
    <div
      className={classname(
        "w-9/12 h-full bg-black-primary fixed z-40 top-0 transition-all",
        openSide ? "right-0" : "-right-full"
      )}
    >
      <div className="flex w-10/12 mx-auto justify-end py-6 ">
        <button
          onClick={() => {
            setOpenSide(false);
          }}
        >
          <img src="./assets/x.svg" />
        </button>
      </div>
      <ul
        className={classname(
          "w-full flex flex-col font-poppins font-normal gap-x-6 text-secondary py-12 text-center gap-y-12 text-2xl"
        )}
      >
        {list.map((data, i) => {
          return (
            <li key={i}>
              <Link
                offset={-100}
                smooth={true}
                duration={500}
                to={data.link}
                onClick={() => clickMenu()}
              >
                {data.tittle}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
