import React from 'react'
import "../Styles/HomeBody.css"
import iconArrow from "../Assets/icons/arrow-narrow-right-svgrepo-com.svg"
import BlobWithImage from './BlobWithImage'
import imageInBlob from "../Assets/images/home-image.png"


export default function HomeBody() {
  return (
    <div className='home-body row'>
        <div className='col-6 p-0'>
            <div className='home-body-text-section'>
                <h6 className='text-resume'>Kindergarten & Baby Care</h6>
                <h1 className='home-big-title mt-4 mb-4'>Kid's Promising Tomorrow Ahead</h1>
                <p className='home-descri'>Suspendisse non blandit sapien Nunc eleifend, enim et porta porta
                eros risus tincidunt diam, vel sodales</p>
                <button className='btn btn-secondary btn-apply'>
                    Apply today
                    <img src={iconArrow} alt="arrow right icon" className='arrow-right-icon'/>
                </button>
            </div>
        </div>
        <div className='col-6 p-0'>
            <div className='home-body-photo-section'>
                <BlobWithImage />
                <img src={imageInBlob} alt="child who smiles" className='image-in-blob'/>
            </div>
        </div>
    </div>
  )
}
