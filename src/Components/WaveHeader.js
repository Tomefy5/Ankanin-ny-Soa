import React from "react";
import motifWave from "../Assets/motifs/waves-2-large2.svg";
import { Link } from "react-router-dom";
import chevronRight from "../Assets/icons/chevron-right-svgrepo-com2.svg"

export default function WaveHeader() {
  return (
    <div className="">
      <div className="relative mt-0 xl:mt-4 bg-rose-500 text-white h-48 md:h-72 lg:h-80 xl:h-96 flex items-center justify-center flex-col">

        <h2 className="text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 md:mb-6">About Us</h2>
        <div className="flex justify-center items-center">
            <Link to={"/"} className="font-medium lg:text-lg" >Home</Link>
            <img className="h-5 lg:h-7 lg:mx-2" src={chevronRight} alt="chevron right" />
            <Link to={"/about"} className="font-medium lg:text-lg">About Us</Link>
        </div>

        <div className="absolute bottom-0 flex w-full h-auto">
          <img
            className="absolute left-0 top-0 w-full xl:w-1/2"
            src={motifWave}
            alt="large wave pattern"
          />
          <img
            className="absolute right-0 top-0 hidden xl:flex w-1/2"
            src={motifWave}
            alt="large wave pattern"
          />
        </div>
      </div>
    </div>
  );
}
