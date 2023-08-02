import React from "react";

import {FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://preview.redd.it/floating-island-lofi-wallpaper-1920x1080-v0-glq653otf1na1.png?auto=webp&s=e193b8eba9fdf471144feef78e8a4e033b08b4fb"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
        <div className="max-w[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="lg:translate-x-1/4 sm:text-5xl text-4xl font-bold text-gray-300">Soy Kevin Garcés</h1>
          <h2 className="lg:pl-24 flex sm:text-3xl text-2xl pt-4 text-gray-300">
        
           
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full text-gray-300  lg:translate-x-1/2">
            <FaTwitter className="cursor-pointer hover:scale-110 transition duration-100" size={20} />
            <FaInstagram className="cursor-pointer hover:scale-110 transition duration-100" size={20} />
            <FaFacebookF className="cursor-pointer hover:scale-110 transition duration-100" size={20} />
            <FaLinkedinIn className="cursor-pointer hover:scale-110 transition duration-100" size={20} />
            <FaGithub className="cursor-pointer hover:scale-110 transition duration-100" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
