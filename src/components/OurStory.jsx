import React from 'react'
import GlobalSmallHeader from './GlobalSmallHeader'
import ourStoryBeside from '../assets/images/ourStorySide.jpg'
import Button from './Button'
import { Link } from 'react-router-dom'

const OurStory = () => {
  return (
    <div className='bg-[#fff] py-12'>
        <div className="custom-container">
            <GlobalSmallHeader className="items-center mb-[50px]" smallTitleBgClr="inline-flex item-center justify-center bg-[#dcfce7] text-[#1d4d16]" mainPeraClr="text-[#6b7280]" smallTitle="About Us" mainHeading="Our Story" mainPera="Founded in 2019, DotLinker has been on a mission to empower businesses through innovative software solutions"/>
            <div className='flex flex-wrap gap-x-4 items-center'>
              <div className='max-w-[calc(50%-8px)] flex flex-col gap-y-4 items-start'>
                <h3 className='text-3xl font-bold'>We Are DotLinker Technologies</h3>
                <p className='text-[grey]'>Founded in 2019, DotLinker Technologies delivers innovative software solutions that transform businesses. Our team of skilled developers and professionals are dedicated to creating applications that help our clients achieve their goals.</p>
                <ul>
                  <li className='flex gap-x-3 my-[10px]'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big flex-shrink-0 h-5 w-5 text-dotlinker-green mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span> 
                    <span>
                      <h5 className='font-bold'>Our Mission</h5>
                      <p className='text-[grey]'>To deliver exceptional software solutions that enable businesses to thrive in the digital landscape.</p>
                    </span>
                  </li>
                  <li className='flex gap-x-3 my-[10px]'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big flex-shrink-0 h-5 w-5 text-dotlinker-green mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span> 
                    <span>
                      <h5 className='font-bold'>Our Vision</h5>
                      <p className='text-[grey]'>To be the leading technology partner that businesses trust for innovative and impactful digital solutions.</p>
                    </span>
                  </li>
                  <li className='flex gap-x-3 my-[10px]'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big flex-shrink-0 h-5 w-5 text-dotlinker-green mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span> 
                    <span>
                      <h5 className='font-bold'>Our Values</h5>
                      <p className='text-[grey]'>Excellence, Innovation, Integrity, Client-Centricity, and Continuous Learning.</p>
                    </span>
                  </li>
                </ul>
                <Button  buttonText="Learn More About Us" className="px-[10px] py-[6px] bg-[#1d4d16] rounded-[5px] text-[#fff]"/>
              </div>
              <div className='max-w-[calc(50%-8px)]'>
                <img src={ourStoryBeside} alt="" className='rounded-2xl'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default OurStory