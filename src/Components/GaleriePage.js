import React from 'react'
import BlocWavePattern from './BlocWavePattern'
import Header from './Header'
import WaveHeader from './WaveHeader'

export default function GaleriePage() {
  return (
    <div className="bg-yellow-100 min-h-[100vh] relative overflow-hidden">
      <BlocWavePattern />
      <Header />
      <div>
        <WaveHeader page={"Galerie"} link={"/galerie"} />
      </div>
    </div>
  )
}
