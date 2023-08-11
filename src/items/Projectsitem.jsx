import React from "react";

const Projectsitem = ({ img, title }) => {
 
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group dark:hover:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 /// bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:scale-110 transition-all duration-300">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-ellipsis text-center">React JS</p>
        <a href="">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projectsitem;
