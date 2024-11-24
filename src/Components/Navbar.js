import React from "react";
import iconHamburger from "../Assets/icons/hamburger-menu-svgrepo-com.svg";

const navbarItems = [
  { name: "Accueil", link: "#accueil" },
  { name: "A Propos", link: "#apropos" },
  { name: "Pédagogie", link: "#pedagogie" },
  { name: "Services", link: "#modalites" },
  { name: "Galerie", link: "#galerie" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="h-12 min-w-0 llg:min-w-[624px] xl:min-w-0 w-auto flex items-center justify-center lg:w-3/5">
      <img
        className="h-8 sm:h-9 lg:hidden"
        src={iconHamburger}
        alt="icon hamburger"
      />
      <ul className="w-full hidden items-center justify-between lg:justify-evenly px-0 lg:px-10 lg:flex">
        {navbarItems.map((navItem, index) => (
          <li className="font-medium" key={index}>
            <a
              className="transition-colorsœ text-gray-800 hover:text-gray-950"
              href={navItem.link}
            >
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
