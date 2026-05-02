import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import BannerSIde from '../assets/images/banner-side.jpg'

const HeroBanner = () => {
  return (
    <div className='py-[50px] bg-[#e3ece4] min-h-[100vh] flex items-center'>
      <div className="custom-container flex justify-between gap-x-[30px] items-center w-full">
        <div className='max-w-[600px]'>
          <span className='bg-[#ffffff] px-[15px] py-[8px] rounded-2xl'>
            Trusted Software Partner{' '}
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <h1 className='text-[72px] font-bold leading-20 my-10'>Linking dots of your <span className='text-[#0db64b] uppercase'>business</span></h1>
          <div className='grid grid-cols-3 gap-x-6 border-t border-[#dbdbdb] pt-[30px]'>
              <div className='bg-white shadow-2xl rounded-2xl px-5 py-3'>
                <div className='flex items-center'>
                  <span className='inline-flex w-[40px] h-[40px] items-center justify-center bg-[#e3ece4] rounded-[6px] mr-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket text-dotlinker-green"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></span>
                  <h5 className='text-3xl font-bold text-[#1d4d16]'>160+</h5>
                </div>
                <h6 className='mt-[7px]'>Projects Delivered</h6>
              </div>
              <div className='bg-white shadow-2xl rounded-2xl px-5 py-3'>
                <div className='flex items-center'>
                  <span className='inline-flex w-[40px] h-[40px] items-center justify-center bg-[#e3ece4] rounded-[6px] mr-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users text-dotlinker-green"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                  <h5 className='text-3xl font-bold text-[#1d4d16]'>15</h5>
                </div>
                <h6 className='mt-[7px]'>Projects Delivered</h6>
              </div>
              <div className='bg-white shadow-2xl rounded-2xl px-5 py-3'>
                <div className='flex items-center'>
                  <span className='inline-flex w-[40px] h-[40px] items-center justify-center bg-[#e3ece4] rounded-[6px] mr-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe text-dotlinker-green"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></span>
                  <h5 className='text-3xl font-bold text-[#1d4d16]'>27+</h5>
                </div>
                <h6 className='mt-[7px]'>Projects Delivered</h6>
              </div>
          </div>
        </div>
        <div className='max-w-[750px]'>
          <img src={BannerSIde} alt="BannerSIde" className='rounded-2xl' />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
