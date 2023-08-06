import React from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { FaBriefcase, FaMoon, FaSun } from "react-icons/fa";

const Sidenav = ({ changeDarkMode, darkMode }) => {
  const [nav, setNav] = React.useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [scrollY, setScrollY] = React.useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const maxScroll = 4000;
  const buttonTop = Math.min(scrollY, maxScroll);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <AiOutlineMenu
        size={20}
        onClick={handleNav}
        className="absolute m-4 right-4 z-[99] md:hidden cursor-pointer text-black hover:scale-110 transition duration-100"
        style={{ top: `${buttonTop}px` }} // Ajustar la posición del botón con el valor de desplazamiento
      />
      
      {nav ? (
        <div className="fixed w-full h-screen bg-black/70 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-2 p-4 cursor-pointer hover:scale-110 duration-200"
          >
            <AiOutlineHome size={20} className="-translate-x-2" />
            <span className="pl-4 ">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-2 p-4 cursor-pointer hover:scale-110 duration-200"
          >
            <FaBriefcase size={20} className="-translate-x-2.5" />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-2 p-4 cursor-pointer hover:scale-110 duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-2 p-4 cursor-pointer hover:scale-110 duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-2 p-4 cursor-pointer hover:scale-110 duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
          <button
            className="inline-flex bg-slate-200 items-center justify-center p-3.5 m-2 overflow-hidden font-medium text-gray-900 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-xl"
            onClick={changeDarkMode}
          >
            {darkMode ? <FaMoon size={25} /> : "☀️"}
          </button>
        </div>
        
      ) : (
        ""
      )
      }
      
      <div className="md:block hidden fixed top-[18%] z-10">
        <div className="flex flex-col">
          <button
            className="inline-flex bg-slate-200 items-center justify-center p-3.5 m-2 overflow-hidden font-medium text-gray-900 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-xl"
            onClick={changeDarkMode}
          >
            {darkMode ? <FaMoon size={25} /> : "☀️"}
          </button>
          <a href="#main">
            <button class=" inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative p-4 transition-all ease-in duration-75 bg-slate-200 dark:bg-gray-900 rounded-full dark:group-hover:bg-opacity-0">
                <AiOutlineHome size={20} />
              </span>
            </button>
          </a>
          <a href="#work">
            <button class=" inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative p-4 transition-all ease-in duration-75 bg-slate-200 dark:bg-gray-900 rounded-full dark:group-hover:bg-opacity-0">
                <FaBriefcase size={20} />
              </span>
            </button>
          </a>
          <a href="#projects">
            <button class=" inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative p-4 transition-all ease-in duration-75 bg-slate-200 dark:bg-gray-900 rounded-full dark:group-hover:bg-opacity-0">
                <AiOutlineProject size={20} />
              </span>
            </button>
          </a>
          <a href="#about">
            <button class=" inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative p-4 transition-all ease-in duration-75 bg-slate-200 dark:bg-gray-900 rounded-full dark:group-hover:bg-opacity-0">
                <BsPerson size={20} />
              </span>
            </button>
          </a>
          <a href="#contact">
            <button class=" inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative p-4 transition-all ease-in duration-75 bg-slate-200 dark:bg-gray-900 rounded-full dark:group-hover:bg-opacity-0">
                <AiOutlineMail size={20} />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
