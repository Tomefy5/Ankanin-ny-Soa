import React from "react";
import BlocWavePattern from "./BlocWavePattern";
import Header from "./Header";
import WaveHeader from "./WaveHeader";
import ServiceContainer from "./ServiceContainer";

export default function ServicesPage() {
  return (
    <div className="bg-yellow-100 min-h-[100vh] relative overflow-hidden">
      <BlocWavePattern />
      <Header />
      <div>
        <WaveHeader page={"Services"} link={"/services"} />
        <div className="w-full px-4 py-4 lg:w-[95%] xl:w-[75%] mx-auto mt-20 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">
          <ServiceContainer/>
          <ServiceContainer/>
          <ServiceContainer/>
        </div>
      </div>
    </div>
  );
}
