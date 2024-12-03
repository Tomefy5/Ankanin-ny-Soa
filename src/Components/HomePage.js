import React from "react";
import About from "./About";
import FooterContact from "./FooterContact";
import Galerie from "./Galerie";
import Home from "./Home";
import Programs from "./Programs";
import Services from "./Services";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Programs />
      <Services />
      <Galerie />
      <FooterContact />
    </div>
  );
}
