import React from 'react'
import motifWave from "../Assets/motifs/waves-2-large.svg"

export default function BlocWavePattern() {
  return (
    <div className='bg-green-400 w-full h-28 flex hidden'>
        <img className='h-full' src={motifWave} alt="large wave pattern" />
        <img className='h-full' src={motifWave} alt="large wave pattern" />
    </div>
  )
}
