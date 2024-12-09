import React from 'react'
import BlocWavePattern from './BlocWavePattern'
import Header from './Header'
import WaveHeader from './WaveHeader'
import listPhotoGallery from '../Data/galerie.json'
import PhotoCard from './PhotoCard'

export default function GaleriePage() {
  return (
    <div className="bg-yellow-100 min-h-[100vh] relative overflow-hidden pb-10">
      <BlocWavePattern />
      <Header />
      <div>
        <WaveHeader page={"Galerie"} link={"/galerie"} />
        <div className='px-4 mx-auto mt-20 pt-10 max-w-[474px] md:max-w-none w-full md:w-[95%] xl:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {
            listPhotoGallery.map((photo,index) => (
              <PhotoCard key={index} url={photo.url} context={photo.context} description={photo.description }/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
