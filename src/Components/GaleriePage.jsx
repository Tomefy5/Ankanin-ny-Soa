import React, { useState } from "react";
import BlocWavePattern from "./BlocWavePattern";
import Header from "./Header";
import WaveHeader from "./WaveHeader";
import listPhotoGallery from "../Data/galerie.json";
import PhotoCard from "./PhotoCard";
import PhotoFilter from "./PhotoFilter";
import FooterContact from "./FooterContact"

export default function GaleriePage() {
  const [photoShown, setPhotoShown] = useState("all");

  const filterHandler = (filter) => {
    setPhotoShown(filter);
  };

  return (
    <div className="bg-yellow-100 min-h-[100vh] relative overflow-hidden pb-10">
      <BlocWavePattern />
      <Header />
      <div>
        <WaveHeader page={"Galerie"} link={"/galerie"} />
        <div className="px-4 mt-20 mb-10 mx-auto max-w-[474px] md:max-w-none w-full md:w-[95%] xl:w-[80%]">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl mb-5 text-yellow-500">
            See Our Photos
          </h2>
          <p className="mb-8 lg:w-[80%] mx-auto text-center">
            Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut
            labore et dolore of magna aliqua. Ut enim ad minim veniam.
          </p>
          <PhotoFilter filterHandler={filterHandler} photoShown={photoShown} />
        </div>
        <div className="px-4 mx-auto max-w-[474px] md:max-w-none w-full md:w-[95%] xl:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-[34rem] overflow-y-auto">
          {listPhotoGallery.map((photo, index) =>
            photoShown === "all" ? (
              <PhotoCard
                key={index}
                url={photo.url}
                context={photo.context}
                description={photo.description}
              />
            ) : photo.context === photoShown ? (
              <PhotoCard
                key={index}
                url={photo.url}
                context={photo.context}
                description={photo.description}
              />
            ) : null
          )}
        </div>
      </div>
      <FooterContact/>
    </div>
  );
}
