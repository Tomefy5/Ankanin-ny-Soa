import React from "react";
import statImage from "../Assets/illustrations/stat_img.png";

const stats = [
  {
    name: "Year Of Experience",
    value: "25+",
    image: statImage,
    alternative: "student",
  },
  {
    name: "Year Of Experience",
    value: "25+",
    image: statImage,
    alternative: "student",
  },

  {
    name: "Year Of Experience",
    value: "25+",
    image: statImage,
    alternative: "student",
  },
];

export default function SectionStat() {
  return (
    <div className="w-full bg-yellow-400 py-20 text-white">
      <div className="mx-auto w-full xl:w-[70%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className={`flex flex-col items-center justify-center ${index === 1 ? 'lg:border-x-2' : ''}`}>
            <img className="" src={stat.image} alt={stat.alternative} />
            <span className="font-extrabold text-5xl my-2">{stat.value}</span>
            <span className="font-medium">{stat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
