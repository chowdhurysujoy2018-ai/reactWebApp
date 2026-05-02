import React from 'react'
import customDevThumb from '../assets/images/customdevelopmentprocess.jpg'

const CustomDevelopmentImage = ({cardStyle}) => {
  return (
    <div className={`${cardStyle}`}>
        <img src={customDevThumb} alt=""  className='h-full w-full object-cover'/>
    </div>
  )
}

export default CustomDevelopmentImage