import React from "react";
import imageAbout from "../Assets/images/img_about.png";
import iconArrowRight from "../Assets/icons/arrow-narrow-right-svgrepo-com.svg";
import iconOkCircle from "../Assets/icons/ok-circle-svgrepo-com.svg"
import iconPhone from "../Assets/icons/phone-svgrepo-com.svg"

export default function About() {
  return (
    <div className="h-auto min-h-[100vh] bg-gray-100 flex lg:items-center lg:justify-center">
      <div className="w-full container mx-auto md:mx-6 lg:mx-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full flex items-center justify-center md:justify-start lg:justify-center md:pl-8">
          <img
            className="w-full md:w-3/4 lg:w-11/12 xl:w-9/12 object-cover"
            src={imageAbout}
            alt="teacher with child"
          />
        </div>
        <div className="w-full p-2">
          <h2 className="font-medium mb-4 text-xl">About Us</h2>
          <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl">Top Choice For Children</h1>
          <p className="mt-5">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Suspendisse gravida vitae nisi in tincidunt.
          </p>
          <div className=" mt-10 w-2/3 xl:w-3/4 lg:w-11/12 grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-start rounded-2xl w-[215px] px-3 py-3 shadow- shadow-lg">
              <img className="h-5 mr-2" src={iconOkCircle} alt="icon ok circle" />
              <span className="font-medium text-xl">Sports Training</span>
            </div>
            <div className="flex items-center justify-start rounded-2xl w-[215px] px-3 py-3 shadow- shadow-lg">
              <img className="h-5 mr-2" src={iconOkCircle} alt="icon ok circle" />
              <span className="font-medium text-xl">Sports Training</span>
            </div>
            <div className="flex items-center justify-start rounded-2xl w-[215px] px-3 py-3 shadow- shadow-lg">
              <img className="h-5 mr-2" src={iconOkCircle} alt="icon ok circle" />
              <span className="font-medium text-xl">Sports Training</span>
            </div>
            <div className="flex items-center justify-start rounded-2xl w-[215px] px-3 py-3 shadow- shadow-lg">
              <img className="h-5 mr-2" src={iconOkCircle} alt="icon ok circle" />
              <span className="font-medium text-xl">Sports Training</span>
            </div>
          </div>
          <div className="flex items-center justify-between md:justify-start flex-wrap w-[347px] md:w-full mt-5 md:mt-10 lg:mt-12">
            <a
              href="#explore"
              className="flex items-center w-[168px] md:w-[202px] justify-center ring-1 ring-gray-800 rounded-2xl py-3 md:py-4 px-5 md:px-7 "
            >
              <span className="mr-3 font-bold text-sm">Explore More</span>
              <img
                className="h-5"
                src={iconArrowRight}
                alt="icon arrow right"
              />
            </a>
            <div className="ml-0 md:ml-8 flex items-center mt-6 md:mt-0">
              <div className="h-[60px] w-[60px] flex items-center justify-center rounded-[50%] border border-black">
                <div className="bg-blue-500 h-[48px] w-[48px] flex items-center justify-center rounded-[50%]">
                  <img className="h-6" src={iconPhone} alt="icon phone" />
                </div>
              </div>
              <div className="flex flex-col h-full ml-3">
                <span className="font-normal">Call Us Now</span>
                <span className="font-medium">+261 34 31 595 55</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
