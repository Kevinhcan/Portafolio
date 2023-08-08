import React from "react";
import { FaPlane, FaCamera, FaCode, FaHeadphones } from "react-icons/fa";
import JS from "./../../public/Skills/JS.png";
import CSS from "./../../public/Skills/css.png";
import HTML from "./../../public/Skills/HTML5.png";
import ReactJS from "./../../public/Skills/reactjs.png";
import Tailwind from "./../../public/Skills/tailwind.png";
import GIT from '../../public/Skills/Git.png'
import Skillsitems from "../items/Skillsitems";


const About = ({darkMode}) => {
  return (
    <div id="about" className="md-pl-20 p-4 py-16 text-[#fffdff] ml-14 md-pl-20 ">
     <div className="m-auto md-pl-20 p-4 py-16 max-w-[1024px]">
     <h1 className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} py-4 text-4xl font-bold text-center`}>
        About
      </h1>

      <div className="flex justify-center ">
        <img
          className="shadow-xl shadow-black h-auto w-52 m-auto border-2 border-[#2d8a54] dark:border-[#a31df0] rounded-2xl justify-center text-center items-center bg-black"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
      </div>
      <div className={` ${darkMode ? 'gradient-p' : 'gradient-p-sun'} py-6 text-[#fdfdff] text-justify text-lg `}>
        Descubrí que me apasiona la programación y el desarrollo web por lo que tomé la importante desición de adentrarme de lleno en este mundo donde mi proposito es convertir el desarrollo web en mi profesión y adquirir nuevos conocimientos  
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className=" md:w-1/2">
          <p className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-2xl font-bold`}>Datos Personales</p>
          <ul className={` ${darkMode ? 'gradient-p' : 'gradient-p-sun'} text-lg py-8`}>
            <li className="mb-2">
              <span className="font-bold pr-2">Cumpleaños </span> 03-12-1999
            </li>
            <li className="mb-2">
              <span className="font-bold pr-2">Teléfono </span> +57 3157937521
            </li>
            <li className="mb-2">
              <span className="font-bold pr-2">Email </span>{" "}
              kgarcesmartinez@gmail.com
            </li>
            <li className="mb-2">
              <span className="font-bold pr-2">Residencia </span> Bogotá,
              Colombia
            </li>
            <li className="mb-2">
              <span className="font-bold pr-2">Cargo Actual</span>{" "}
              <span className=" bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900 dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 rounded-md text-white font-bold p-1 px-1.5 pt-0 ">
                Tecnico de servicios
              </span>
            </li>
          </ul>
        </div>
        <div className=" md:w-1/2">
          <p className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-2xl font-bold pb-4`}>Intereses</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-200 transition duration-300 text-black dark:bg-gray-800 dark:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center  justify-center">
              <FaPlane size={40} />
              Viajar
            </div>
            <div className="bg-gray-200 transition duration-300 text-black dark:bg-gray-800 dark:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center justify-center">
              <FaCamera size={40} />
              Fotografía
            </div>
            <div className="bg-gray-200 transition duration-300 text-black dark:bg-gray-800 dark:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center  justify-center">
              <FaCode size={40} />
              Desarrollo
            </div>
            <div className="bg-gray-200 transition duration-300 text-black dark:bg-gray-800 dark:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center justify-center">
              <FaHeadphones size={40} />
              Música
            </div>
          </div>
        </div>
      </div>
     </div>
      <div className="w-full">
        <h1 className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-4xl text-center font-bold pb-4`}>
          Skills
        </h1>

        <div className="flex flex-wrap gap-16 m-20 justify-center">
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
