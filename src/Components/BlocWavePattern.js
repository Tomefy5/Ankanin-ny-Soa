import React from 'react'
import motifWave from "../Assets/motifs/waves-2-large.svg"

export default function BlocWavePattern() {
  return (
    <div className='w-full h-28 absolute flex top-0 hidden lg:flex'>
        <img className='h-full' src={motifWave} alt="large wave pattern" />
        <img className='h-full' src={motifWave} alt="large wave pattern" />
        <div className='bg-red-600 absolute w-full h-10 px-28 grid'>
            <div className='bg-blue-700 h-full w-full grid grid-cols-[500px_1fr_380px]'>
                <div className='bg-fuchsia-500'></div>
                <div className='bg-cyan-500'></div>
                <div className='bg-lime-500'></div>
            </div>
        </div>
    </div>
  )
}
