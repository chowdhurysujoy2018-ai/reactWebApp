import React from 'react'
import StikcyBanner from '../components/StikcyBanner'
import OurStory from '../components/OurStory'
import offciceLocationSIdeImg from '../assets/images/officeLocation.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faUsers, faClock, faAward} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div>
        <StikcyBanner classProperty="max-w-[700px] text-center" stickyBannerBg="bg-[#fefefe]" titleSize="text-[48px] font-bold" peraClr="text-[grey]" stickyTitle="About DotLinker" stickyPera="Learn more about our company, our team, and our mission to deliver innovative software solutions that transform businesses."/>
        <OurStory />
        <section className='py-[80px] bg-[#f3f4f6]'>
          <div className="custom-container flex flex-wrap gap-[20px]">
            <div className='max-w-[calc(50%-20px)] w-full flex flex-col gap-y-4 justify-center'>
              <h3 className='text-[20px] font-bold'>Our Office Locations</h3>
              <p className='text-[12px] text-[#6b7280]'>With offices strategically located in Kolkata, India, we serve clients globally while maintaining our core commitment to innovation and quality.</p>
              <div className='bg-white p-[20px] rounded-2xl shadow-sm hover:shadow-md'>
                <div className='flex gap-x-[15px]'>
                    <FontAwesomeIcon icon={faMapLocationDot} className='text-[#1d4d16]'/> <h5>Headquarters</h5>
                </div>
                <p className='text-[12px] text-[#6b7280] max-w-[400px] mt-[8px]'>Sanvi Tower, South Jagtala, 2 No Netaji Park GF-FR; FL-1 A6-83/218, Kolkata, West Bengal 700141</p>
              </div>
              <div className='bg-white p-[20px] rounded-2xl shadow-sm hover:shadow-md'>
                <div className='flex gap-x-[15px]'>
                    <FontAwesomeIcon icon={faMapLocationDot} className='text-[#1d4d16]'/> <h5>Headquarters</h5>
                </div>
                <p className='text-[12px] text-[#6b7280] max-w-[400px] mt-[8px]'>Sanvi Tower, South Jagtala, 2 No Netaji Park GF-FR; FL-1 A6-83/218, Kolkata, West Bengal 700141</p>
              </div>
            </div>
            <div className='max-w-[calc(50%-20px)] w-full'>
              <img src={offciceLocationSIdeImg} alt="" />
            </div>
          </div>
        </section>
        <section className='py-[80px] bg-white'>
          <div className="custom-container">
            <div className='max-w-[700px] m-auto text-center'>
                <h3 className='text-xl font-bold mb-[6px]'>Company Milestones</h3>
                <p className='text-[#6b7280] text-[12px]'>Our journey of growth and excellence in delivering innovative software solutions</p>
            </div>
            <div className='flex flex-wrap gap-x-[15px] justify-between mt-[50px]'>
              <div className='max-w-[calc(25%-15px)] bg-[#f3f4f6] rounded-[5px] w-full flex flex-col justify-center items-center gap-y-[5px] py-[25px]'>
                <span className='rounded-full bg-white inline-flex items-center justify-center w-[50px] h-[50px]'>
                  <FontAwesomeIcon icon={faUsers} className='text-[#1d4d16]'/>
                </span>
                <h4 className='text-[20px] font-bold mt-[10px]'>15+</h4>
                <h5>Team Members</h5>
                <p className='text-[12px] text-[#6b7280] max-w-[400px]'>Skilled professionals dedicated to excellence</p>
              </div>  
              <div className='max-w-[calc(25%-15px)] bg-[#f3f4f6] rounded-[5px] w-full flex flex-col justify-center items-center gap-y-[5px] py-[25px]'>
                <span className='rounded-full bg-white inline-flex items-center justify-center w-[50px] h-[50px]'>
                  <FontAwesomeIcon icon={faClock} className='text-[#1d4d16]'/>
                </span>
                <h4 className='text-[20px] font-bold mt-[10px]'>6</h4>
                <h5>Team Members</h5>
                <p className='text-[12px] text-[#6b7280] max-w-[400px]'>Skilled professionals dedicated to excellence</p>
              </div> 
              <div className='max-w-[calc(25%-15px)] bg-[#f3f4f6] rounded-[5px] w-full flex flex-col justify-center items-center gap-y-[5px] py-[25px]'>
                <span className='rounded-full bg-white inline-flex items-center justify-center w-[50px] h-[50px]'>
                  <FontAwesomeIcon icon={faAward} className='text-[#1d4d16]'/>
                </span>
                <h4 className='text-[20px] font-bold mt-[10px]'>160+</h4>
                <h5>Team Members</h5>
                <p className='text-[12px] text-[#6b7280] max-w-[400px]'>Skilled professionals dedicated to excellence</p>
              </div> 
              <div className='max-w-[calc(25%-15px)] bg-[#f3f4f6] rounded-[5px] w-full flex flex-col justify-center items-center gap-y-[5px] py-[25px]'>
                <span className='rounded-full bg-white inline-flex items-center justify-center w-[50px] h-[50px]'>
                  <FontAwesomeIcon icon={faUsers} className='text-[#1d4d16]'/>
                </span>
                <h4 className='text-[20px] font-bold mt-[10px]'>95%</h4>
                <h5>Team Members</h5>
                <p className='text-[12px] text-[#6b7280] max-w-[400px]'>Skilled professionals dedicated to excellence</p>
              </div> 
            </div>
          </div>
        </section>
    </div>
  )
}

export default About