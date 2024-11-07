import React from "react";
import "../Styles/Home.css";
import WavePattern from "./WavePattern";
import Navbar from "./Navbar";
import HeaderLogo from "./HeaderLogo";
import HomeBody from "./HomeBody";

export default function Home() {
  return (
    <div className="home">
      <WavePattern />
      <header className="header">
        <HeaderLogo />
        <Navbar />
      </header>
      <HomeBody />
    </div>
  );
}
