import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Main = ({ t, i18n }) => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-center scale-x-[-1] "
        src="https://github.com/Kevinhcan/Portafolio/blob/master/public/Wallpaper.png?raw=true"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30 dark:bg-black/50">
        <div className="max-w[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="lg:translate-x-1/4 sm:text-5xl text-4xl font-bold dark:text-gray-300">
            {t("main.name")}
          </h1>
          <h2 className="lg:pl-24 flex sm:text-3xl text-2xl pt-4 dark:text-gray-300">
            <TypeAnimation
              sequence={[
                t('main.1'),
                1000,
                t('main.2'),
                1000,
                t('main.3'),
                1000,
                t('main.4'),
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "0px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full dark:text-gray-300 lg:translate-x-1/2 ">
            <a href="https://instagram.com/kevinhcan?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 hover:shadow-md hover:bg-black/50 rounded-lg transition duration-100">
              <FaInstagram
                className="cursor-pointer hover:scale-110 "
                size={25}
              />
            </a>
            <a href="https://www.linkedin.com/in/kevin-garces-martinez-a234a91b4/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800  hover:shadow-md hover:bg-black/50 rounded-md transition duration-100">
              <FaLinkedinIn
                className="cursor-pointer hover:scale-110 "
                size={25}
              />
            </a>
            <a href="https://github.com/Kevinhcan" target="_blank" rel="noopener noreferrer" className="hover:text-orange-700  hover:shadow-md hover:bg-black/50 rounded-full transition duration-100">
              <FaGithub
                className="cursor-pointer hover:scale-110 "
                size={25}
              />
            </a>
            <a href="https://wa.me/573157937521" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:scale-110  hover:shadow-md hover:bg-black/50 rounded-full">
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
