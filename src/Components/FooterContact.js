import React from "react";
import iconPhone from "../Assets/icons/phone-svgrepo-com.svg";
import iconEnvelope from "../Assets/icons/envelope-mail-mobile-ui-svgrepo-com.svg";
import iconLocation from "../Assets/icons/location-pin-alt-1-svgrepo-com.svg";
import nurseryLogo from "../Assets/Logo/logo_creche.png";
import logoFacebook from "../Assets/icons/facebook.svg";
import logoInstagram from "../Assets/icons/instagram-167-svgrepo-com.svg";
import iconChevronRight from "../Assets/icons/chevron-right-svgrepo-com.svg";

const contactFooter = [
  {
    contact: "phone",
    icon: iconPhone,
    text: "Call Us 7/24",
    content: "+261 34 21 595 55",
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

export default function FooterContact() {
  return (
    <div className="bg-gray-100 h-auto pb-10 px-4 lg:px-2">
      <div className="w-full md:w-[95%] lg:w-full xl:w-[85%] md:max-w-[754px] lg:max-w-[1102px] xl:max-w-[1296px]  mx-auto">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between w-full mx-auto border-b">
          {contactFooter.map((contact, index) => (
            <div className="py-8 flex items-center" key={index}>
              <div className="h-[60px] w-[60px] flex items-center justify-center rounded-[50%] border border-dashed border-black">
                <div className="h-[48px] w-[48px] flex items-center justify-center rounded-[50%] animate-none">
                  <img
                    className="h-7 md:h-8"
                    src={contact.icon}
                    alt={`icon ${contact}`}
                  />
                </div>
              </div>
              <div className="flex flex-col h-full ml-5">
                <span className="font-normal text-sm ssm:text-base">
                  {contact.text}
                </span>
                <span className="font-bold text-xl ssm:text-2xl">
                  {contact.content}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 lg:mt-20">
          <div className="flex flex-col">
            <a
              href="#home"
              className="flex items-center min-w-[218px] border-b-4 h-[70px]"
            >
              <img className="h-12 mr-3" src={nurseryLogo} alt="bird" />
              <span className="text-2xl font-bold tracking-tight">
                Ankanin'ny Soa
              </span>
            </a>
            <p className="text-sm md:text-base text-balance mt-5">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>
            <div className="mt-5 flex">
              <a
                href="#facebook"
                className="w-[36px] h-[36px] flex items-center justify-center mx-2 border-black border rounded first:ml-0"
              >
                <img
                  className="h-[50%]"
                  src={logoFacebook}
                  alt="logo of facebook"
                />
              </a>
              <a
                href="#instagram"
                className="w-[36px] h-[36px] flex items-center justify-center mx-2 border-black border rounded first:ml-0"
              >
                <img
                  className="h-[50%]"
                  src={logoInstagram}
                  alt="logo of facebook"
                />
              </a>
            </div>
          </div>
          <div className="">
            <div className="border-b-4 h-[70px] flex items-center">
              <h4 className="text-2xl font-bold">Quick Links</h4>
            </div>
            <ul className="">
              <li className="py-2">
                <a href="#service" className="flex">
                  <img
                    className="h-6 mr-1"
                    src={iconChevronRight}
                    alt="icon chevron right"
                  />
                  <span className="font-medium">Our Services</span>
                </a>
              </li>
              <li className="py-2">
                <a href="#service" className="flex">
                  <img
                    className="h-6 mr-1"
                    src={iconChevronRight}
                    alt="icon chevron right"
                  />
                  <span className="font-medium">FAQ's</span>
                </a>
              </li>
              <li className="py-2">
                <a href="#service" className="flex">
                  <img
                    className="h-6 mr-1"
                    src={iconChevronRight}
                    alt="icon chevron right"
                  />
                  <span className="font-medium">Galerie</span>
                </a>
              </li>
              <li className="py-2">
                <a href="#service" className="flex">
                  <img
                    className="h-6 mr-1"
                    src={iconChevronRight}
                    alt="icon chevron right"
                  />
                  <span className="font-medium">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="border-b-4 h-[70px] flex items-center">
              <h4 className="text-2xl font-bold">Categorie</h4>
            </div>
            <ul className="">
              <li className="py-2">
                <a href="#service" className="flex">
                  <img
                    className="h-6 mr-1"
                    src={iconChevronRight}
                    alt="icon chevron right"
                  />
                  <span className="font-medium">Petite Section</span>
                </a>
              </li>
              <li className="py-2">
                <a href="#service" className="flex">
                  <img
                    className="h-6 mr-1"
                    src={iconChevronRight}
                    alt="icon chevron right"
                  />
                  <span className="font-medium">Grande Section</span>
                </a>
              </li>
              <li className="py-2">
                <a href="#service" className="flex">
                  <img
                    className="h-6 mr-1"
                    src={iconChevronRight}
                    alt="icon chevron right"
                  />
                  <span className="font-medium">Crèche</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
