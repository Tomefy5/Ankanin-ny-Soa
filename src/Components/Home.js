import React from "react";
import BlocWavePattern from "./BlocWavePattern";
import Header from "./Header";
import HomeBody from "./HomeBody";

export default function Home() {
  return (
    <div className="bg-gray-100 w-full min-h-[100vh] relative overflow-hidden lg:flex lg:flex-col lg:justify-between">
      <div>
        <BlocWavePattern />
        <Header />
      </div>
      <HomeBody />
    </div>
  );
}
