import React from 'react'

const Skillsitems = ({ img, title }) => {
  return (
    <div>
        <div className="relative flex items-center justify-center m-2 w-32 rounded-xl group hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-teal-600 to-indigo-900  /// dark:hover:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 dark:group-hover:from-purple-600 dark:group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-20" />
      <div className="hidden  group-hover:block  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
       
      </div>
    </div>
    </div>
  )
}

export default Skillsitems