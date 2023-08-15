import React from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";

const Sidenav = ({ changeDarkMode, darkMode, t, i18n }) => {
  const [nav, setNav] = React.useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {nav ? (
        <FaTimes
          className="fixed m-4 right-4 z-[99] md:hidden cursor-pointer bg-gray-400 dark:bg-gray-700 p-1 w-7 h-auto rounded-lg dark:text-white hover:scale-110 transition duration-100"
          size={20}
          onClick={handleNav}
        />
      ) : (
        <AiOutlineMenu
          size={20}
          onClick={handleNav}
          className=" fixed m-4 right-4 z-[99] md:hidden cursor-pointer bg-gray-400 dark:bg-gray-700 p-1 w-7 h-auto rounded-lg dark:text-white hover:scale-110 transition duration-100"
        />
      )}

      {nav ? (
        <div className="fixed w-full h-screen bg-black/70 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[65%] flex justify-center items-center rounded-full shadow-lg bg-slate-200 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-2 p-4 cursor-pointer hover:scale-110 duration-200"
          >
            <AiOutlineHome size={20} className="-translate-x-2" />
            <span className="pl-4 ">{t("sidenav.Home")}</span>
          </a>

          {/* <a
            onClick={handleNav}
            href="#work"
            className="w-[65%] flex justify-center items-center rounded-full shadow-lg bg-slate-200 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-2 p-4 cursor-pointer hover:scale-110 duration-200"
          >
            <FaBriefcase size={20} className="-translate-x-2.5" />
            <span className="pl-4">Work</span>
          </a> */}
          <a
            onClick={handleNav}
            href="#main"
            className="w-[65%] flex justify-center items-center rounded-full shadow-lg bg-slate-200 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-2 p-4 cursor-pointer hover:scale-110 duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">{t("sidenav.Resume")}</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[65%] flex justify-center items-center rounded-full shadow-lg bg-slate-200 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-2 p-4 cursor-pointer hover:scale-110 duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">{t("sidenav.Projects")}</span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            className="w-[65%] flex justify-center items-center rounded-full shadow-lg bg-slate-200 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-2 p-4 cursor-pointer hover:scale-110 duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">{t("sidenav.Contact")}</span>
          </a>
          <button
            className="inline-flex bg-slate-200 items-center justify-center p-3.5 m-2 overflow-hidden font-medium text-gray-900 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-xl"
            onClick={changeDarkMode}
          >
            {darkMode ? (
              <FaMoon className="text-white" size={25} />
            ) : (
              <FaSun className="text-yellow-500" size={25} />
            )}
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[35%] z-10">
        <div className="flex flex-col ">
          <a href="#main">
            <button className=" inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-100 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100  dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 dark:group-hover:from-purple-600 dark:group-hover:to-blue-500 dark:text-white focus:ring-4 dark:focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900">
              <span className="relative p-4 transition-all ease-in duration-75 bg-slate-800 dark:bg-gray-900  rounded-full group-hover:bg-opacity-0">
                <AiOutlineHome size={20} />
              </span>
            </button>
          </a>
          {/* <a href="#work">
          <button className=" inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-100 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100  dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 dark:group-hover:from-purple-600 dark:group-hover:to-blue-500 dark:text-white focus:ring-4 dark:focus:outline-none dark:focus:ring-blue-300 dark:focus:ring-blue-800 hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900">
              <span className="relative p-4 transition-all ease-in duration-75 bg-slate-800 dark:bg-gray-900  rounded-full group-hover:bg-opacity-0">
                <FaBriefcase size={20} />
              </span>
            </button>
          </a> */}
          <a href="#about">
            <button className=" inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-100 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100  dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 dark:group-hover:from-purple-600 dark:group-hover:to-blue-500 dark:text-white focus:ring-4 dark:focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900">
              <span className="relative p-4 transition-all ease-in duration-75 bg-slate-800 dark:bg-gray-900  rounded-full group-hover:bg-opacity-0">
                <BsPerson size={20} />
              </span>
            </button>
          </a>
          <a href="#projects">
            <button className=" inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-100 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100  dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 dark:group-hover:from-purple-600 dark:group-hover:to-blue-500 dark:text-white focus:ring-4 dark:focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900">
              <span className="relative p-4 transition-all ease-in duration-75 bg-slate-800 dark:bg-gray-900  rounded-full group-hover:bg-opacity-0">
                <AiOutlineProject size={20} />
              </span>
            </button>
          </a>

          <a href="#contact">
            <button className=" inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-100 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100  dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 dark:group-hover:from-purple-600 dark:group-hover:to-blue-500 dark:text-white focus:ring-4 dark:focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900">
              <span className="relative p-4 transition-all ease-in duration-75 bg-slate-800 dark:bg-gray-900  rounded-full group-hover:bg-opacity-0">
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
