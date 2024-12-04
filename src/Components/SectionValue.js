import React from "react";
import illustrationLearn from "../Assets/illustrations/undraw_reading_book_re_kqpk.svg";
import imageValue from "../Assets/images/value_img.png"

export default function SectionValue() {
  const valuesLeft = [
    {
      title: "Teacher Training And Progress",
      text: "Adipiscing elit Praesent luctus laoreet iaculis Curabitur rutrum lectus augue, ut pulvinar.",
      illustration: illustrationLearn,
      alternative: "preson who is reading",
    },

    {
      title: "Teacher Training And Progress",
      text: "Adipiscing elit Praesent luctus laoreet iaculis Curabitur rutrum lectus augue, ut pulvinar.",
      illustration: illustrationLearn,
      alternative: "preson who is reading",
    },
  ];

  const valuesRight = [
    {
      title: "Teacher Training And Progress",
      text: "Adipiscing elit Praesent luctus laoreet iaculis Curabitur rutrum lectus augue, ut pulvinar.",
      illustration: illustrationLearn,
      alternative: "preson who is reading",
    },

    {
      title: "Teacher Training And Progress",
      text: "Adipiscing elit Praesent luctus laoreet iaculis Curabitur rutrum lectus augue, ut pulvinar.",
      illustration: illustrationLearn,
      alternative: "preson who is reading",
    },
  ];

  return (
    <div className="mt-20 pt-10 flex flex-col text-center items-center">
      <h2 className="font-medium mb-6 text-xl text-rose-500">Our Values</h2>
      <div>
        <h1 className="400 px-3 inline-block ssm:w-[80%] md:px-0 lg:w-[70%] font-bold text-3xl md:text-4xl xl:text-5xl text-yellow-500">
          The Best Playschool For Your Kid
        </h1>
      </div>
      <div className="pt-10 pb-10 w-full xl:w-[75%] md:w-[80%] xl:mt-10 xl:mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col">
          {valuesLeft.map((value, index) => (
            <div className="pt-10 flex flex-col items-center justify-center text-center md:grid md:grid-cols-[1fr_3fr] md:gap-1 md:px-4 md:py-3">
              <div className="bg-orange-200 w-[138px] h-[90px] rounded flex items-center justify-center">
                <img
                  className="h-2/3"
                  src={value.illustration}
                  alt={value.alternative}
                />
              </div>
              <div>
                <h3 className="font-medium text-xl mt-5 lg:mt-0 text-rose-500">
                  {value.title}
                </h3>
                <p className="text-sm mt-3 inline-block w-[80%]">
                  {value.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img className="h-[100%] object-cover" src={imageValue} alt="kid" />
        </div>
        <div className="flex flex-col">
          {valuesRight.map((value, index) => (
            <div className="pt-10 flex flex-col items-center justify-center text-center md:grid md:grid-cols-[1fr_3fr] md:gap-1 md:px-4 md:py-3">
              <div className="bg-orange-200 w-[138px] h-[90px] rounded flex items-center justify-center">
                <img
                  className="h-2/3"
                  src={value.illustration}
                  alt={value.alternative}
                />
              </div>
              <div>
                <h3 className="font-medium text-xl mt-5 lg:mt-0 text-rose-500">
                  {value.title}
                </h3>
                <p className="text-sm mt-3 inline-block w-[80%]">
                  {value.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
