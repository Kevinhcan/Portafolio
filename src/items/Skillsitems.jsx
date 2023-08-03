import React from 'react'

const Skillsitems = ({ img, title }) => {
  return (
    <div>
        <div className="relative flex items-center justify-center m-2 w-32 rounded-xl group hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-700 via-fuchsia-900 to-indigo-800 hover:scale-90 transition-all duration-300">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
       
      </div>
    </div>
    </div>
  )
}

export default Skillsitems