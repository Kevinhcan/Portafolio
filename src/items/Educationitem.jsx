import React from "react";

const Educationitem = ({ year, title, duration, details, details2, details3, darkMode }) => {
  return (
    <div>
      <ol className="flex flex-col md:flex-row relative border-l dark:text-[#fffdff] border-stone-800 dark:border-stone-200">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-800 dark:bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white " />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900 inline-block px-2 py-1 font-semibold text-white dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 rounded-md">
              {year}
            </span>
            <span className="text-xl font-semibold text[#001b5e]">{title}</span>
            <span className="my-1 text-sm font-normal leading-none dark:text-stone-400">
              {duration}
            </span>
          </p>
          <h1 className="text-xl text-center p-4">Habilities</h1>
          <p
            className={` ${
              darkMode ? "gradient-p" : "gradient-p-sun"
            } my-2 font-noma text-lg bg-gray-700`}
          >
            {details}
            <br />
            {details2}
            <br />
            {details3}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Educationitem;
