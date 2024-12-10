import React from "react";
import nurseryLogo from "../Assets/Logo/logo_creche.png";
import Navbar from "./Navbar";
import iconTranslate from "../Assets/icons/language-svgrepo-com.svg";
import iconChavronDown from "../Assets/icons/chevron-down-svgrepo-com.svg";

export default function Header() {
  return (
    <div className="w-full h-auto p-4 sm:px-10 llg:px-8 xl:px-32 flex items-center justify-between lg:pt-24">
      <div className="h-full flex items-center">
        <a href="#home" className="flex items-center min-w-[218px]">
          <img className="h-14 mr-3" src={nurseryLogo} alt="bird" />
          <span className="font-medium text-xl md:text-2xl xl:text-3xl tracking-tight font-buba text-yellow-500">
            Ankanin'ny Soa
          </span>
        </a>
        <button className="ring-1 ring-yellow-500 items-center w-auto min-w-[154px] cursor-pointer justify-between ml-10 rounded py-3 px-4 hidden lg:flex">
          <img className="h-4 mr-3" src={iconTranslate} alt="icon translate" />
          <span className="font-normal mr-3">Translate</span>
          <img className="h-4" src={iconChavronDown} alt="icon chevron down" />
        </button>
      </div>
      <Navbar />
    </div>
  );
}
