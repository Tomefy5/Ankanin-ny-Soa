import React from 'react'
import "../Styles/HeaderLogo.css"
import iconLanguage from "../Assets/icons/language-svgrepo-com.svg"
import iconChevron from "../Assets/icons/chevron-down-svgrepo-com.svg"

export default function HeaderLogo() {
  return (
    <div className='container-header-logo'>
        <span className='logo-ankanin-ny-soa'>Ankanin'Ny Soa</span>
        <div className='container-tool-language'>
          <img src={iconLanguage} alt="icon language"  className='icon-language'/>
          <button className='btn-language-selector'>
            <span className='text-language'>Traduire</span>
            <img src={iconChevron} alt="icon chevron" className='icon-chevron'/>
          </button>
        </div>
    </div>
  )
}
