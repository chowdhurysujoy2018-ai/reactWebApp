import React from 'react'
import GlobalSmallHeader from './GlobalSmallHeader';
import OurServicesHome from '../../ourServicesHome.json'

const OurServices = () => {
  return (
    <div className='bg-[#f9fafb] py-12'>
        <div className="custom-container">
            <GlobalSmallHeader className="items-center mb-[50px]" smallTitleBgClr="inline-flex item-center justify-center bg-[#dcfce7] text-[#1d4d16]" mainPeraClr="text-[#6b7280]" smallTitle="Our Services" mainHeading="Comprehensive Software Development Services" mainPera="We deliver end-to-end software solutions tailored to your business needs, from concept and design to development and ongoing support."/>
            <div className='flex flex-wrap gap-x-4 gap-y-4'>
                {OurServicesHome.map((serviceItem, index)=>{
                  return <div key={index} className='w-[calc(33.3%-20px)] bg-[#fff] shadow rounded-2xl p-[30px]'>
                    <span className='inline-flex h-[50px] w-[50px] text-[#fff] bg-[#1d4d16] items-center justify-center rounded-[5px]'>{serviceItem.id}</span>
                    <h3 className='my-[20px] text-2xl font-bold text-[#1d4d16]'>{serviceItem.title}</h3>
                    <p className='text-[grey]'>{serviceItem.paragraph}</p>
                  </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default OurServices;
