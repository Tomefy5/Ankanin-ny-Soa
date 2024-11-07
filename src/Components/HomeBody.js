import React from 'react'
import "../Styles/HomeBody.css"
import iconArrow from "../Assets/icons/arrow-narrow-right-svgrepo-com.svg"

export default function HomeBody() {
  return (
    <div className='home-body row'>
        <div className='col-6 p-0'>
            <div className='home-body-text-section'>
                <h6 className='text-resume'>Kindergarten & Baby Care</h6>
                <h1 className='home-big-title'>Kid's Promising Tomorrow Ahead</h1>
                <p className='home-descri'>Suspendisse non blandit sapien Nunc eleifend, enim et porta porta
                eros risus tincidunt diam, vel sodales</p>
                <button className='btn btn-secondary'>
                    Apply today
                    <img src={iconArrow} alt="arrow right icon" className='arrow-right-icon'/>
                </button>
            </div>
        </div>
        <div className='col-6 p-0'>
            <div className='home-body-photo-section'></div>
        </div>
    </div>
  )
}
