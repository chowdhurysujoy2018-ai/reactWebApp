import React from 'react'
import StikcyBanner from '../components/StikcyBanner'
import OurServices from '../components/OurServices'
import CustomDevelopmentCntn from '../components/CustomDevelopmentCntn'
import CustomDevelopmentImage from '../components/CustomDevelopmentImage'

const Services = () => {
  return (
    <>
        <StikcyBanner classProperty="max-w-[700px] text-center" stickyBannerBg="bg-[#fefefe]" titleSize="text-[48px] font-bold" peraClr="text-[grey]" stickyTitle="Our Services" stickyPera="We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as possible."/>
        <OurServices />
        <section className='py-[80px] bg-gray-100'>
          <div className="custom-container flex flex-wrap justify-between gap-[20px]">
            <CustomDevelopmentCntn cardStyle="max-w-[calc(50%-20px)] w-full"/>
            <CustomDevelopmentImage cardStyle="max-w-[calc(50%-20px)] w-full rounded-[15px] overflow-hidden"/>
          </div>
        </section>
        
    </>
  )
}

export default Services