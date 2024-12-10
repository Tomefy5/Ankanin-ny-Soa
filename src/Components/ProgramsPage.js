import React from "react";
import BlocWavePattern from "./BlocWavePattern";
import Header from "./Header";
import WaveHeader from "./WaveHeader";
import imageProg from "../Assets/images/prog_det1.png";
import iconAge from "../Assets/icons/hourglass-svgrepo-com.svg";
import iconArrowRight from "../Assets/icons/arrow-narrow-right-svgrepo-com.svg";
import logoFacebook from "../Assets/icons/facebook-176-svgrepo-com.svg";
import iconOk from "../Assets/icons/ok-svgrepo-com.svg"
export default function ProgramsPage() {
  return (
    <div className="bg-yellow-100 min-h-[100vh] relative overflow-hidden">
      <BlocWavePattern />
      <Header />
      <div>
        <WaveHeader page={"Programs"} link={"/programs"} />
        <div className="bg-red-600 w-full mx-auto mt-20 md:w-[96%] xl:w-[70%] px-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 pb-10">
          <div className="bg-green-400 flex flex-col justify-center">
            <div className="flex flex-col items-start">
              <img
                className="w-full mb-7"
                src={imageProg}
                alt="kid with teacher"
              />
              <span className="bg-blue-600 rounded-lg px-4 py-2">
                Kindergarten
              </span>
            </div>
            <div className="bg-orange-400 mt-10">
              <h2 className="text-2xl lg:text-3xl mb-4">Descriptions</h2>
              <p>
                Consectetur adipisicing elit, sed do eiusmod tempor is
                incididunt ut labore et dolore of magna aliqua. Ut enim ad minim
                veniam, made of owl the quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute
                irure and dolor in reprehenderit.
              </p>
              <p className="mt-3">
                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
                eleifend porta arcu In hac augu ehabitasse the is platea augue
                thelorem turpoi dictumst. In lacus libero faucibus at malesuada
                sagittis placerat eros sed istincidunt augue ac ante rutrum sed
                the is sodales augue consequat.
              </p>
              <h2 className="text-2xl lg:text-3xl mb-4 mt-3">
                Requirments For The Classses
              </h2>
              <p className="my-3">
                Nulla facilisi. Vestibulum tristique sem in eros eleifend
                imperdiet. Donec quis convallis neque. In id lacus pulvinar
                lacus, eget vulputate lectus. Ut viverra bibendum lorem, at
                tempus nibh mattis in. Sed a massa eget lacus consequat auctor.
              </p>
              <ul>
                <li className="flex items-center my-2">
                  <img className="h-5 mr-2" src={iconOk} alt="icon Ok" />
                  <span>Ut viverra bibendum lorem, at tempus nibh mattis</span>
                </li>
                <li className="flex items-center my-2">
                  <img className="h-5 mr-2" src={iconOk} alt="icon Ok" />
                  <span>Ut viverra bibendum lorem, at tempus nibh mattis</span>
                </li>
                <li className="flex items-center my-2">
                  <img className="h-5 mr-2" src={iconOk} alt="icon Ok" />
                  <span>Ut viverra bibendum lorem, at tempus nibh mattis</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-lime-200">
            <div className="w-full h-auto flex flex-col border border-black rounded-md p-6">
              <h4 className="font-bold text-3xl mb-2">Classses Includes:</h4>
              <ul>
                <li className="flex justify-between">
                  <div className="flex items-center">
                    <img className="h-8" src={iconAge} alt="hour glass" />
                    <span className="font-medium">Age</span>
                  </div>
                  <span>3-5 year</span>
                </li>
              </ul>
              <a
                href="#apply"
                className="flex w-[80%] mx-auto items-center justify-center bg-rose-500 hover:bg-rose-600 transition-colors duration-300 text-white rounded-2xl mt-5 md:mt-10 lg:mt-12 py-3 md:py-4 px-5 md:px-7 "
              >
                <span className="mr-3 font-bold">Contact Us</span>
                <img
                  className="h-5"
                  src={iconArrowRight}
                  alt="icon arrow right"
                />
              </a>
              <div className="flex items-center mt-5">
                <span>Follow Us: </span>
                <a
                  href="#facebook"
                  className="w-[36px] h-[36px] flex items-center justify-center mx-2 border-yellow-300 border rounded-sm first:ml-0"
                >
                  <img
                    className="h-[50%]"
                    src={logoFacebook}
                    alt="logo of facebook"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
