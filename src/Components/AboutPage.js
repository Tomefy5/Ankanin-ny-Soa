import React from 'react'
import BlocWavePattern from './BlocWavePattern'
import FooterContact from './FooterContact'
import Header from './Header'
import WaveHeader from './WaveHeader'
import SectionValue from './SectionValue'
import SectionStat from './SectionStat'

export default function AboutPage() {
  return (
    <div className='bg-yellow-100 min-h-[100vh] relative overflow-hidden'>
      <BlocWavePattern/>
      <Header/>
      <div>
        <WaveHeader/>
        <SectionValue/> 
        <SectionStat/>
        <FooterContact/>
      </div>
    </div>
  )
}
