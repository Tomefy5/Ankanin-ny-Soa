import React from "react";
import BlocWavePattern from './BlocWavePattern';
import Header from './Header';

export default function Home() {
  return (
    <div className="bg-gray-100 w-full h-[100vh]">
      <BlocWavePattern />
      <Header />
    </div>
  );
}
