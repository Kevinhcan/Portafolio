import React from "react";
import { FaPlane, FaCamera, FaCode, FaHeadphones } from "react-icons/fa";
import JS from "./../../public/Skills/JS.png";
import CSS from "./../../public/Skills/css.png";
import HTML from "./../../public/Skills/HTML5.png";
import ReactJS from "./../../public/Skills/reactjs.png";
import Tailwind from "./../../public/Skills/tailwind.png";
import GIT from '../../public/Skills/Git.png'
import Skillsitems from "../items/Skillsitems";


const About = ({darkMode, t, i18n}) => {
  return (
    <div id="about" className="px-8 mx-0 md:m-10  text-[#fffdff]">
     <div className="m-auto py-20 max-w-[1024px]">
     <h1 className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} py-4 text-4xl font-bold text-center`}>
        {t("about.about")}
      </h1>

      <div className="flex justify-center ">
        <img
          className="shadow-xl shadow-black h-auto w-52 m-auto border-2 border-[#2d8a54] dark:border-[#a31df0] rounded-2xl justify-center text-center items-center bg-black"
          src= "../../public/Presentacion2.png" /* "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" */
          alt=""
        />
      </div>
      <div className={` ${darkMode ? 'gradient-p' : 'gradient-p-sun'} py-6 text-[#fdfdff] text-justify text-lg `}>
      {t("about.talk_about_me")}
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className=" md:w-1/2">
          <p className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-2xl font-bold`}>{t("about.personal_data")}</p>
          <ul className={` ${darkMode ? 'gradient-p' : 'gradient-p-sun'} text-lg py-8`}>
            <li className="mb-2">
              <span className="font-bold pr-2">{t("about.birthday")} </span> 03-12-1999
            </li>
            <li className="mb-2">
              <span className="font-bold pr-2">{t("about.phone")} </span> +57 3157937521
            </li>
            <li className="mb-2">
              <span className="font-bold pr-2">{t("about.email")} </span>{" "}
              kgarcesmartinez@gmail.com
            </li>
            <li className="mb-2">
              <span className="font-bold pr-2">{t("about.from")} </span> Bogotá,
              Colombia
            </li>
            <li className="mb-2 ">
              <span className="font-bold pr-2">{t("about.job")}</span>{" "}
              <span className=" bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900 dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 rounded-md text-white font-bold p-1 px-1.5 pt-0 ">
              {t("about.service_technician")}
              </span>
            </li>
          </ul>
        </div>
        <div className=" md:w-1/2">
          <p className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-2xl font-bold pb-4`}>{t("about.hobbies")}</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-200 transition duration-300 text-black dark:bg-gray-800 dark:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center  justify-center">
              <FaPlane size={40} />
              {t("about.travel")}
            </div>
            <div className="bg-gray-200 transition duration-300 text-black dark:bg-gray-800 dark:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center justify-center">
              <FaCamera size={40} />
              {t("about.photography")}
            </div>
            <div className="bg-gray-200 transition duration-300 text-black dark:bg-gray-800 dark:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center  justify-center">
              <FaCode size={40} />
              {t("about.code")}
            </div>
            <div className="bg-gray-200 transition duration-300 text-black dark:bg-gray-800 dark:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center justify-center">
              <FaHeadphones size={40} />
              {t("about.music")}
            </div>
          </div>
        </div>
      </div>
     </div>
      <div className="w-full">
        <h1 className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-4xl text-center font-bold pb-4`}>
        {t("about.skills")}
        </h1>

        <div className="flex flex-wrap gap-8 md:gap-12 my-20 -mx-6 justify-center">
           <Skillsitems img={JS} title="JavaScript"/>
           <Skillsitems img={CSS} title="CSS"/>
           <Skillsitems img={HTML} title="HTML5"/>
           <Skillsitems img={ReactJS} title="ReactJS"/>
           <Skillsitems img={Tailwind} title="Tailwind CSS"/>
           <Skillsitems img={GIT} title="Git"/>
         
           
        </div>

      </div>
    </div>
  );
};

export default About;
