import React from 'react'
import BlocWavePattern from './BlocWavePattern'
import Header from './Header'
import WaveHeader from './WaveHeader'
import ContactBody from './ContactBody'
import FooterContact from './FooterContact'

export default function ContactPage() {
  return (
    <div className="bg-yellow-100 min-h-[100vh] pb-10 relative overflow-hidden">
      <BlocWavePattern />
      <Header />
      <div>
        <WaveHeader page={"Contact"} link={"/contact"} />
        <ContactBody/>
        <FooterContact/>
      </div>
    </div>
  )
}
