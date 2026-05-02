import React from 'react'
import StikcyBanner from '../components/StikcyBanner'
import ContactForm from '../components/contactComponents/ContactForm'
import ContactInfo from '../components/contactComponents/ContactInfo'
import GlobalSmallHeader from '../components/GlobalSmallHeader'

const Contact = () => {
  return (
    <>
        <StikcyBanner classProperty="max-w-[700px] text-center" stickyBannerBg="bg-[#fefefe]" titleSize="text-[48px] font-bold" peraClr="text-[grey]" stickyTitle="Get in Touch" stickyPera="We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as possible."/>
        <div className='py-[80px] bg-[#f3f4f6]'>
            <div className="custom-container">
             <GlobalSmallHeader className="items-center mb-[50px]" smallTitleBgClr="inline-flex item-center justify-center bg-[#dcfce7] text-[#1d4d16]" mainPeraClr="text-[#6b7280]" smallTitle="Get In Touch" mainHeading="Let's Discuss Your Project" mainPera="Ready to bring your ideas to life? Contact us today to discuss how we can help you achieve your business goals."/>

              <div className='flex flex-wrap gap-[16px]'>
                <ContactForm />
                <ContactInfo />
              </div>
            </div>
        </div>
    </>
  )
}

export default Contact