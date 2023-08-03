import React from "react";
import { FaPlane, FaCamera, FaCode, FaHeadphones } from "react-icons/fa";
import JS from "./../../public/Skills/JS.png";
import CSS from "./../../public/Skills/css.png";
import HTML from "./../../public/Skills/HTML5.png";
import ReactJS from "./../../public/Skills/reactjs.png";
import Tailwind from "./../../public/Skills/tailwind.png";
import Skillsitems from "../items/Skillsitems";
import Carrousel from "../items/Carrousel";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://img.freepik.com/iconos-gratis/css_318-698167.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
];

const About = () => {
  return (
    <div id="about" className=" m-auto md-pl-20 p-4 py-16 ">
     <div className="m-auto md-pl-20 p-4 py-16 max-w-[1024px]">
     <h1 className="py-4  text-4xl font-bold text-center text-[#001b5e]">
        About
      </h1>

      <div className="flex justify-center">
        <img
          className="h-auto w-52 m-auto border-2 border-[#001b5e] rounded-2xl justify-center text-center items-center bg-black"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
      </div>
      <div className="py-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        similique aliquam voluptate tenetur distinctio id esse repellendus sunt
        delectus optio, repellat qui culpa itaque explicabo corporis libero
        quibusdam cumque iste.
      </div>
      <div className="flex ">
        <div className="w-1/2">
          <p className="text-2xl font-bold  text-[#001b5e]">Datos Personales</p>
          <ul className=" py-8">
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
              <span className="font-bold pr-2">Cargo </span>{" "}
              <span className="bg-[#001b5e] rounded-md text-white font-bold p-1 px-1.5 pt-0 ">
                Tecnico de servicios
              </span>
            </li>
          </ul>
        </div>
        <div className="w-1/2 ">
          <p className="text-2xl font-bold text-[#001b5e] pb-4">Intereses</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-100 hover:bg-[#001b5e] transition duration-300 hover:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center  justify-center">
              <FaPlane size={40} />
              Viajar
            </div>
            <div className="bg-gray-100 hover:bg-[#001b5e] transition duration-300 hover:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center justify-center">
              <FaCamera size={40} />
              Fotografía
            </div>
            <div className="bg-gray-100 hover:bg-[#001b5e] transition duration-300 hover:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center  justify-center">
              <FaCode size={40} />
              Desarrollo
            </div>
            <div className="bg-gray-100 hover:bg-[#001b5e] transition duration-300 hover:text-white gap-1 flex-col rounded-lg w-28 h-28 flex items-center justify-center">
              <FaHeadphones size={40} />
              Música
            </div>
          </div>
        </div>
      </div>
     </div>
      <div className="w-full">
        <h1 className="py-4  text-4xl font-bold text-center text-[#001b5e]">
          Skills
        </h1>

        <div className="flex flex-wrap gap-16 m-20 justify-center">
           <Skillsitems img={JS} title="JavaScript"/>
           <Skillsitems img={CSS} title="CSS"/>
           <Skillsitems img={HTML} title="HTML5"/>
           <Skillsitems img={ReactJS} title="ReactJS"/>
           <Skillsitems img={Tailwind} title="Tailwind CSS"/>

         
           
        </div>

      </div>
    </div>
  );
};

export default About;
