import React from "react";
import iconArrowRight from "../Assets/icons/arrow-narrow-right-svgrepo-com.svg";
import imageProg1 from "../Assets/images/thomas-lefebvre-aRXPJnXQ9lU-unsplash.jpg";

export default function Programs() {
  return (
    <div className="bg-gray-100 pt-16 min-h-[100vh] flex flex-col text-center items-center justify-start pb-5">
      <h2 className="font-medium mb-6 text-xl">Our Programs</h2>
      <div>
        <h1 className="400 px-3 inline-block ssm:w-[80%] md:px-0 lg:w-[60%] font-bold text-3xl md:text-4xl xl:text-5xl">
          We Meet Kids At Their Level Regardless Of Their Age
        </h1>
      </div>
      <div className="mt-8 lg:mt-16 flex flex-wrap items-center justify-center px-4">

        <div className="relative bg-gray-300 px-6 py-4 md:mx-6 smd:mt-0 w-[300px] h-[396px] xsm:w-[370px] xsm:h-[466px] md:w-[400px] md:h-[496px] lg:w-[420px] lg:h-[516px] rounded-tl-[37%] rounded-tr-[40%] rounded-bl-[35%] rounded-br-[50%]">
          <div className="bg-gray-100 overflow-hidden mx-auto w-[95%] h-1/2 rounded-tl-[40%] rounded-tr-[50%] rounded-bl-[25%] rounded-br-[40%]">
            <img
              className="object-cover h-full"
              src={imageProg1}
              alt="programs section"
            />
          </div>
          <div className="w-[80%] mx-auto mt-4 lg:mt-10 text-center">
            <h3 className="font-bold text-xl">Kindergarten</h3>
            <h4 className="font-medium text-md mt-2 md:mt-3">(1-2years)</h4>
            <p className="font-normal mt-2 md:mt-5">
              Lorem ipsum dolor consectur the adipiscing elit eiusmod.
            </p>
          </div>
          <a href="#prog" className="bg-gray-200 flex items-center justify-center rounded-3xl absolute left-1/2 transform -translate-x-1/3 translate-y-1/3 bottom-0 w-[50px] h-[45px] md:w-[60px] md:h-[55px]">
            <img
              className="h-[40%]"
              src={iconArrowRight}
              alt="icon arrow right"
            />
          </a>
        </div>

        <div className="relative bg-gray-300 px-6 py-4 mt-12 md:mx-6 smd:mt-0 w-[300px] h-[396px] xsm:w-[370px] xsm:h-[466px] md:w-[400px] md:h-[496px] lg:w-[420px] lg:h-[516px] rounded-tl-[37%] rounded-tr-[40%] rounded-bl-[35%] rounded-br-[50%]">
          <div className="bg-gray-100 overflow-hidden mx-auto w-[95%] h-1/2 rounded-tl-[40%] rounded-tr-[50%] rounded-bl-[25%] rounded-br-[40%]">
            <img
              className="object-cover h-full"
              src={imageProg1}
              alt="programs section"
            />
          </div>
          <div className="w-[80%] mx-auto mt-4 lg:mt-10 text-center">
            <h3 className="font-bold text-xl">Kindergarten</h3>
            <h4 className="font-medium text-md mt-2 md:mt-3">(1-2years)</h4>
            <p className="font-normal mt-2 md:mt-5">
              Lorem ipsum dolor consectur the adipiscing elit eiusmod.
            </p>
          </div>
          <a href="#prog" className="bg-gray-200 flex items-center justify-center rounded-3xl absolute left-1/2 transform -translate-x-1/3 translate-y-1/3 bottom-0 w-[50px] h-[45px] md:w-[60px] md:h-[55px]">
            <img
              className="h-[40%]"
              src={iconArrowRight}
              alt="icon arrow right"
            />
          </a>
        </div>

        <div className="relative bg-gray-300 px-6 py-4 mt-12 md:mx-6 smd:mt-0 w-[300px] h-[396px] xsm:w-[370px] xsm:h-[466px] md:w-[400px] md:h-[496px] lg:w-[420px] lg:h-[516px] rounded-tl-[37%] rounded-tr-[40%] rounded-bl-[35%] rounded-br-[50%]">
          <div className="bg-gray-100 overflow-hidden mx-auto w-[95%] h-1/2 rounded-tl-[40%] rounded-tr-[50%] rounded-bl-[25%] rounded-br-[40%]">
            <img
              className="object-cover h-full"
              src={imageProg1}
              alt="programs section"
            />
          </div>
          <div className="w-[80%] mx-auto mt-4 lg:mt-10 text-center"> 
            <h3 className="font-bold text-xl">Kindergarten</h3>
            <h4 className="font-medium text-md mt-2 md:mt-3">(1-2years)</h4>
            <p className="font-normal mt-2 md:mt-5">
              Lorem ipsum dolor consectur the adipiscing elit eiusmod.
            </p>
          </div>
          <a href="#prog" className="bg-gray-200 flex items-center justify-center rounded-3xl absolute left-1/2 transform -translate-x-1/3 translate-y-1/3 bottom-0 w-[50px] h-[45px] md:w-[60px] md:h-[55px]">
            <img
              className="h-[40%]"
              src={iconArrowRight}
              alt="icon arrow right"
            />
          </a>
        </div>

      </div>
    </div>
  );
}
