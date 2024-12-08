import React from "react";
import iconPhone from "../Assets/icons/calling-svgrepo-com2.svg";
import iconEnvelope from "../Assets/icons/mail-pencil-svgrepo-com2.svg";
import iconLocation from "../Assets/icons/map-point-svgrepo-com2.svg";
import imageContact from "../Assets/images/adam-kool-ndN00KmbJ1c-unsplash.jpg"
import ContactForm from "./ContactForm";

export default function ContactBody() {
  const contactFooter = [
    {
      contact: "phone",
      icon: iconPhone,
      text: "Call Us 7/24",
      content: "+261 34 31 595 55",
    },
    {
      contact: "email",
      icon: iconEnvelope,
      text: "Make a Quote",
      content: "rovanisoa@gmail.com",
    },
    {
      contact: "location",
      icon: iconLocation,
      text: "Location",
      content: "IB 271 Andoharanofotsy",
    },
  ];

  return (
    <div className="mx-auto mt-36 px-4 md:px-8 pt-10 w-full lg:w-[90%] xl:w-[75%] grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="flex flex-col">
        <div className="bg-rose-500 text-white rounded-2xl rounded-b-none p-2 avmob:p-5 pb-0 flex flex-col">
          <div className="flex flex-col justify-between w-full mx-auto">
            {contactFooter.map((contact, index) => (
              <div
                className={`py-8 flex items-center ${
                  index === 1 ? "border-y" : ""
                }`}
                key={index}
              >
                <div className="h-[40px] w-[40px] avmob:h-[60px] avmob:w-[60px] flex-none flex items-center justify-center rounded-[50%] border border-dashed border-white">
                  <div className="h-[25px] w-[25px] avmob:h-[48px] avmob:w-[48px] flex items-center justify-center rounded-[50%] animate-none">
                    <img
                      className="h-7 md:h-8"
                      src={contact.icon}
                      alt={`icon ${contact}`}
                    />
                  </div>
                </div>
                <div className="flex flex-col h-full ml-5">
                  <span className="font-normal text-wrap text-sm ssm:text-base">
                    {contact.text}
                  </span>
                  <span className="font-bold text-wrap text-xl ssm:text-2xl">
                    {contact.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-lime-500 h-[20vh] rounded-2xl rounded-t-none overflow-hidden">
            <img className="w-full object-cover" src={imageContact} alt="nature" />
        </div>
      </div>
      <ContactForm/>
    </div>
  );
}
