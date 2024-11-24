import React from "react";
import imageAbout from "../Assets/images/img_about.png";
import iconArrowRight from "../Assets/icons/arrow-narrow-right-svgrepo-com.svg";
import iconOkCircle from "../Assets/icons/ok-circle-svgrepo-com.svg"

export default function About() {
  return (
    <div className="h-auto min-h-[100vh] bg-gray-100 flex llg:items-center llg:justify-center">
      <div className="w-full container mx-auto grid grid-cols-1 llg:grid-cols-2">
        <div className="bg-teal-400 w-full flex items-center justify-center">
          <img
            className="w-full object-cover"
            src={imageAbout}
            alt="teacher with child"
          />
        </div>
        <div className="w-full p-2">
          <h2 className="font-medium mb-4 text-xl">About Us</h2>
          <h1 className="font-bold text-3xl md:text-5xl">Top Choice For Children</h1>
          <p className="mt-5">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Suspendisse gravida vitae nisi in tincidunt.
          </p>
          <div className=" mt-10 w-2/3 llg:w-full xl:w-3/4 lg:w-2/3 grid gap-5 grid-cols-1 md:grid-cols-2">
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
          <div>
            <a
              href="#explore"
              className="flex items-center max-w-[168px] justify-between ring-1 ring-gray-800 rounded-xl mt-5 md:mt-10 lg:mt-12 py-3 md:py-4 px-5 md:px-7 "
            >
              <span className="mr-2 font-bold text-sm">Explore More</span>
              <img
                className="h-5"
                src={iconArrowRight}
                alt="icon arrow right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
