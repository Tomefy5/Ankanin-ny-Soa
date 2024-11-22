import React from 'react'
import iconHamburger from "../Assets/icons/hamburger-menu-svgrepo-com.svg"

export default function Navbar() {
  return (
    <nav className='h-12 w-auto flex items-center justify-center lg:w-3/5'>
        <img className='h-8 sm:h-9 lg:hidden' src={iconHamburger} alt="icon hamburger" />
        <ul className='w-full hidden items-center justify-evenly px-10 lg:flex'>
            <li className='font-medium'><a className='transition-colors text-gray-800 hover:text-gray-950' href="#home">Home</a></li>
            <li className='font-medium'><a className='transition-colors text-gray-800 hover:text-gray-950' href="#about">About</a></li>
            <li className='font-medium'><a className='transition-colors text-gray-800 hover:text-gray-950' href="#services">Services</a></li>
            <li className='font-medium'><a className='transition-colors text-gray-800 hover:text-gray-950' href="#hcontact">Contact</a></li>
        </ul>
    </nav>
  )
}
