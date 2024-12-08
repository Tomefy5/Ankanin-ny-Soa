import React from "react";
import serviceImage from "../Assets/illustrations/stat_img.png";
import iconOk from "../Assets/icons/ok-svgrepo-com.svg";
import iconArrowRight from "../Assets/icons/arrow-narrow-right-svgrepo-com2.svg";

export default function ServiceContainer() {
  return (
    <div className="bg-rose-500 max-w-[368px] min-w-[300px] lg:max-w-none mx-auto md:mx-0 rounded-3xl p-8 h-[432px] xl:h-[492px] text-white shadow-slate-500 shadow-lg flex flex-col justify-between">
      <div className="bg-blue-30 pb-4 w-full flex items-center justify-between  after:h-[1px] relative after:w-full after:bg-white after:absolute after:bottom-0">
        <div className="flex flex-col">
          <h2 className="text-2xl mb-3">Prenium Plan</h2>
          <span className="font-medium text-xl">
            <span className="font-bold text-4xl">$49</span>/Monthly
          </span>
        </div>
        <div className="bg-prple-400 h-[80px] w-[80px] ssm:h-[90px] ssm:w-[90px] rounded-[50%] flex items-center justify-center">
          <img
            className="h-[80%]"
            src={serviceImage}
            alt="service representation"
          />
        </div>
      </div>
      <div className="bg-green-0 flex-1">
        <ul className="py-3 first:mt-0">
          <li className="bg-yellow-30 flex my-3">
            <img className="h-5 mr-3" src={iconOk} alt="icon of ok" />
            <span className="text-sm ssm:text-base">
              Condimentum porttitor sem
            </span>
          </li>
        </ul>
      </div>
      <a
        href="#choose"
        className="w-[190px] flex items-center justify-center bg-yellow-200 hover:bg-yellow-300 transition-colors duration-300 text-yellow-700 rounded-xl mt-5 md:mt-10 lg:mt-12 py-5 md:py-4 px-5 md:px-7 "
      >
        <span className="mr-3 font-bold">Choose Plan</span>
        <img className="h-5" src={iconArrowRight} alt="icon arrow right" />
      </a>
    </div>
  );
}
