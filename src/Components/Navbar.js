import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  const navbarItems = [
    { name: "Accueil", link: "accueil" },
    { name: "A Propos", link: "apropos" },
    { name: "Pédagogie", link: "pedagogie" },
    { name: "Modalités", link: "modalites" },
    { name: "Galerie", link: "galerie" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <div className="barnav">
      <ul className="barnav-nav">
        {navbarItems.map((item, index) => (
          <li key={index} className="barnav-item">
            <Link to={item.link} smooth={true} duration={500} style={{ cursor: "pointer" }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
