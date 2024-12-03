import React from "react";
import imageService from "../Assets/motifs/service_image.png";

export default function Services() {
  return (
    <div className="h-auto py-16 pt-5 bg-yellow-100">
      <h2 className="font-medium mb-4 text-center text-xl text-rose-500">Our Services</h2>
      <div className="flex flex-wrap mt-10 justify-center xl:h-[40vh]">
        <a
          href="#service"
          className="flex-link-service py-4 mx-0 bg-gra-300 w-[90%] max-w-[306px] flex flex-col text-center items-center"
        >
          <div className="w-[80%] mx-auto flex items-center justify-center">
            <img src={imageService} alt="blob" />
          </div>
          <h3 className="font-medium text-xl mt-5 text-red-500">Choose A Service</h3>
          <p className="mt-3 inline-block w-[80%]">
            In a free hour, when our power of choice is untrammeled and
          </p>
        </a>

        <a
          href="#service"
          className="flex-link-service py-4 mx-0 bg-gra-300 w-[90%] max-w-[306px] flex flex-col text-center items-center"
        >
          <div className="w-[80%] mx-auto flex items-center justify-center">
            <img src={imageService} alt="blob" />
          </div>
          <h3 className="font-medium text-xl mt-5 text-red-500">Choose A Service</h3>
          <p className="mt-3 inline-block w-[80%]">
            In a free hour, when our power of choice is untrammeled and
          </p>
        </a>

        <a
          href="#service"
          className="flex-link-service py-4 mx-0 bg-gra-300 w-[90%] max-w-[306px] flex flex-col text-center items-center"
        >
          <div className="w-[80%] mx-auto flex items-center justify-center">
            <img src={imageService} alt="blob" />
          </div>
          <h3 className="font-medium text-xl mt-5 text-red-500">Choose A Service</h3>
          <p className="mt-3 inline-block w-[80%]">
            In a free hour, when our power of choice is untrammeled and
          </p>
        </a>

        <a
          href="#service"
          className="flex-link-service py-4 mx-0 bg-gra-300 w-[90%] max-w-[306px] flex flex-col text-center items-center"
        >
          <div className="w-[80%] mx-auto flex items-center justify-center">
            <img src={imageService} alt="blob" />
          </div>
          <h3 className="font-medium text-xl mt-5 text-red-500">Choose A Service</h3>
          <p className="mt-3 inline-block w-[80%]">
            In a free hour, when our power of choice is untrammeled and
          </p>
        </a>
      </div>
    </div>
  );
}
