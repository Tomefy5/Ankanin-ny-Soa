import React from "react";
import imageGalerie1 from "../Assets/Galerie/img_gal1.jpg";
import imageGalerie2 from "../Assets/Galerie/img_gal2.jpg";
import imageGalerie3 from "../Assets/Galerie/img_gal3.jpg";
import imageGalerie4 from "../Assets/Galerie/img_gal4.jpg";
import imageGalerie5 from "../Assets/Galerie/img_gal5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const images = [
  imageGalerie1,
  imageGalerie2,
  imageGalerie3,
  imageGalerie4,
  imageGalerie5,
];

export default function Galerie() {
  return (
    <div className="bg-gray-100 h-auto pt-8 lg:pt-16">
      <div className="flex items-center justify-center mb-0">
        <div className="bg-black h-[1px] w-[30%] hidden lg:flex"></div>
        <h3 className="font-medium text-xl text-center mx-8">Our Galerie</h3>
        <div className="bg-black h-[1px] w-[30%] hidden lg:flex"></div>
      </div>
      <div className="container mx-auto py-12">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="p-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`galerie_img ${index}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
