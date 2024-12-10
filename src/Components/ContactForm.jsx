import React from "react";
import iconArrowRight from "../Assets/icons/arrow-narrow-right-svgrepo-com.svg";

export default function ContactForm() {
  return (
    <div>
      <h2 className="text-3xl md:text-5xl mb-2 text-yellow-400">
        Ready To Get Started ?
      </h2>
      <p className="mb-8">
        Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut
        blandit felis odio in turpis. Quisque rhoncus, eros in auctor ultrices,
      </p>
      <form className="pb-8">
        <div className="xl:flex xl:justify-between gap-2">
          <div className="flex flex-col xl:w-1/2">
            <label className="font-bold mb-5 text-yellow-600">Your Name*</label>
            <input
              className="h-[66px] rounded px-5 outline-gray-300 font-medium"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col mt-6 xl:mt-0 xl:w-1/2">
            <label className="font-bold mb-5 text-yellow-600">
              Your Email*
            </label>
            <input
              className="h-[66px] rounded px-5 outline-gray-300 font-medium"
              type="text"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <label className="font-bold mb-5 text-yellow-600">
            Write Message*
          </label>
          <textarea
            className="h-[226px] rounded p-5 outline-gray-300 font-medium min-w-full"
            type="text"
            placeholder="Write Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-[190px] flex items-center justify-center bg-rose-500 hover:bg-rose-600 transition-colors duration-300 text-white rounded-xl mt-5 md:mt-10 lg:mt-12 py-5 md:py-4 px-5 md:px-7 ">
          <span className="mr-3 font-bold text-sm">Send Message</span>
          <img className="h-5" src={iconArrowRight} alt="icon arrow right" />
        </button>
      </form>
    </div>
  );
}
