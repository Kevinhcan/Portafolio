import React from "react";
import Workitem from "../items/Workitem";

const data = [
  {
    year: 2020,
    title: "Lorem, ipsum.",
    duration: "2 años",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis pariatur doloribus laboriosam ipsa sint, ex iste magnam commodi vitae?",
  },
  {
    year: 2020,
    title: "Lorem, ipsum.",
    duration: "2 años",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis pariatur doloribus laboriosam ipsa sint, ex iste magnam commodi vitae?",
  },
  {
    year: 2020,
    title: "Lorem, ipsum.",
    duration: "2 años",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis pariatur doloribus laboriosam ipsa sint, ex iste magnam commodi vitae?",
  },
  {
    year: 2020,
    title: "Lorem, ipsum.",
    duration: "2 años",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis pariatur doloribus laboriosam ipsa sint, ex iste magnam commodi vitae?",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
