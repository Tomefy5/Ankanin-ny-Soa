import React from "react";
import iconHamburger from "../Assets/icons/hamburger-menu-svgrepo-com.svg";
import { Link } from "react-router-dom";

const navbarItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Programs", link: "/programs" },
  { name: "Services", link: "/services" },
  { name: "Galerie", link: "/galerie" },
  { name: "Contact", link: "/contact" },
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
            <Link
              className="transition-colors duration-300  hover:text-rose-500"
              to={navItem.link}
            >
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
