import React from "react";

const Projectsitem = ({ img, title }) => {
 
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group dark:hover:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 /// bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:scale-110 transition-all duration-300">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block  absolute top-[50%] left-[25%] translate-x-[-16.5%] translate-y-[-50%]">
        <h3 className="text-lg font-bold text-gray-900 tracking-wider text-justify">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-ellipsis text-gray-900 text-center">React JS</p>
        <a href="" target="_blank" rel="noopener noreferrer">
          <p className="text-center p-3 rounded-lg bg-gray-900 text-gray-200 font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projectsitem;
