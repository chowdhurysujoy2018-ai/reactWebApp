import React from 'react'
import Slider from "react-slick";
import GlobalSmallHeader from './GlobalSmallHeader'
import slider1 from '../assets/images/partener1.png'
import slider2 from '../assets/images/partener2.png'
import slider3 from '../assets/images/partener3.png'
import slider4 from '../assets/images/partener4.png'
import slider5 from '../assets/images/partener5.jpg'
import slider6 from '../assets/images/partener6.webp'
import slider7 from '../assets/images/partener7.png'
import slider8 from '../assets/images/partener8.png'

const TrustedPartners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false, // you can set true for next/prev buttons
  };

  const images = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8];
  return (
    <div className='bg-[#f3f4f6] py-20'>
        <div className="custom-container">
            <GlobalSmallHeader className="items-center mb-[50px]" smallTitleBgClr="inline-flex item-center justify-center bg-[#dcfce7] text-[#1d4d16]" mainPeraClr="text-[#6b7280]" smallTitle="Trusted Partnerships" mainHeading="Strong Alliances, Lasting Impact" mainPera="Proudly collaborating with top partners worldwide. 🌍"/>
            <div className="w-full mt-10">
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div key={index}  className="px-2">
                    <div key={index} className='bg-[#fff] shadow rounded-2xl p-4 h-[130px] flex items-center justify-center'>
                      <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="rounded-2xl max-h-[90px] object-content"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
        </div>
    </div>
  )
}

export default TrustedPartners