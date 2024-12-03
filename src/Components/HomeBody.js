import React from "react";
import iconArrowRight from "../Assets/icons/arrow-narrow-right-svgrepo-com.svg";
import homeImage from "../Assets/images/kids-removebg-preview.png"

export default function HomeBody() {
  return (
    <div className="mt-16 max-w-3xl h-auto lg:max-w-none mx-auto w-auto  grid grid-cols-1 lg:grid-cols-2 lg:min-w-5xl lg:w-[1040px] xl:w-[1300px]">
      <div className="flex flex-col items-center p-4 md:items-start md:px-8 lg:justify-center">
        <h2 className="mb-4 lg:mb-8 text-rose-500">Kindergarten & Baby Care <span className="ml-1">✨</span></h2>
        <h1 className="text-yellow-500 font-extrabold text-4xl text-center mb-4 lg:mb-8 md:text-6xl xl:text-7xl md:text-start">
          Kid's Promising <span className="font-chewy text-rose-500">Tomorrow</span> Ahead
        </h1>
        <p className="text-center text-lg text-wrap md:text-start">
          Suspendisse non blandit sapien Nunc eleifend, enim et porta porta eros
          risus tincidunt diam, vel sodales
        </p>
        <a
          href="#apply"
          className="flex items-center justify-between bg-rose-500 hover:bg-rose-600 transition-colors duration-300 text-white rounded-xl mt-5 md:mt-10 lg:mt-12 py-3 md:py-4 px-5 md:px-7 "
        >
          <span className="mr-2 font-bold">Apply Today</span>
          <img className="h-5" src={iconArrowRight} alt="icon arrow right" />
        </a>
      </div>
      <div className="py-4 p-4 pb-0 flex justify-center">
        <img className="w-full object-cover max-w-[516px] lg:max-w-none xl:max-w-none " src={homeImage} alt="smiling child" />
      </div>
    </div>
  );
}
