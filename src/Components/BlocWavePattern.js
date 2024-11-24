import React from 'react'
import motifWave from "../Assets/motifs/waves-2-large.svg"
import iconLocation from "../Assets/icons/location-pin-alt-1-svgrepo-com.svg"
import iconPhone from "../Assets/icons/phone-svgrepo-com.svg"
import iconFacebook from "../Assets/icons/facebook.svg"
import iconInstagram from "../Assets/icons/instagram-167-svgrepo-com.svg"

export default function BlocWavePattern() {
  return (
    <div className='w-full h-28 absolute top-0 hidden lg:flex'>
        <img className='h-full' src={motifWave} alt="large wave pattern" />
        <img className='h-full' src={motifWave} alt="large wave pattern" />
        <div className='absolute w-full h-10 px-28 grid'>
            <div className='h-full w-full grid grid-cols-[480px_1fr_380px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img className='h-5 mr-1' src={iconLocation} alt="icon location" />
                        <span className='font-normal'>IB 271 Malaza, Andoharanofotsy</span>
                    </div>
                    <div className='flex items-center'>
                        <img className='h-5 mr-1' src={iconPhone} alt="icon phone" />
                        <span className='font-normal'>+261 34 31 595 55</span>
                    </div>
                </div>
                <div className='min-w-[150px]'></div>
                <div className='flex items-center justify-center'>
                    <span className='mr-4'>Follow Us On :</span>
                    <div className='flex items-center justify-around'>
                        <a href="#facebook"><img className='h-[18px] mr-4' src={iconFacebook} alt="icon facebook" /></a>
                        <a href="#instagram"><img className='h-[18px]' src={iconInstagram} alt="icon instagram" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
