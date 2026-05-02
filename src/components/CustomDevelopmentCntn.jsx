import React from 'react'

const CustomDevelopmentCntn = ({cardStyle}) => {
  return (
    <div className={`${cardStyle}`}>
        <h2 className='text-[32px] font-bold'>Custom Development Process</h2>
        <p className='text-[grey]'>Our development process is designed to ensure high-quality, efficient delivery of solutions that perfectly align with your business objectives.</p>
        <ul>
            <li className='flex items-start gap-x-[15px] my-[20px]'>
                <span className='text-[#fff] h-[35px] w-[35px] rounded-full bg-[#1d4d16] inline-flex items-center justify-center'>1</span>
                <div>
                    <h4 className='font-bold text-[18px]'>Discovery & Planning</h4>
                    <p className='text-[grey]'>We start by understanding your business needs and planning the project scope.</p>
                </div>
            </li>
            <li className='flex items-start gap-x-[15px] my-[20px]'>
                <span className='text-[#fff] h-[35px] w-[35px] rounded-full bg-[#1d4d16] inline-flex items-center justify-center'>2</span>
                <div>
                    <h4 className='font-bold text-[18px]'>Design & Architecture</h4>
                    <p className='text-[grey]'>Creating intuitive designs and robust architecture for scalable solutions.</p>
                </div>
            </li>
            <li className='flex items-start gap-x-[15px] my-[20px]'>
                <span className='text-[#fff] h-[35px] w-[35px] rounded-full bg-[#1d4d16] inline-flex items-center justify-center'>3</span>
                <div>
                    <h4 className='font-bold text-[18px]'>Development</h4>
                    <p className='text-[grey]'>Agile development with regular updates and transparent communication.</p>
                </div>
            </li>
            <li className='flex items-start gap-x-[15px] my-[20px]'>
                <span className='text-[#fff] h-[35px] w-[35px] rounded-full bg-[#1d4d16] inline-flex items-center justify-center'>4</span>
                <div>
                    <h4 className='font-bold text-[18px]'>Testing & QA</h4>
                    <p className='text-[grey]'>Rigorous testing to ensure high-quality, bug-free applications.</p>
                </div>
            </li>
            <li className='flex items-start gap-x-[15px] my-[20px]'>
                <span className='text-[#fff] h-[35px] w-[35px] rounded-full bg-[#1d4d16] inline-flex items-center justify-center'>5</span>
                <div>
                    <h4 className='font-bold text-[18px]'>Deployment</h4>
                    <p className='text-[grey]'>Smooth deployment with minimal disruption to your business.</p>
                </div>
            </li>
            <li className='flex items-start gap-x-[15px] my-[20px]'>
                <span className='text-[#fff] h-[35px] w-[35px] rounded-full bg-[#1d4d16] inline-flex items-center justify-center'>6</span>
                <div>
                    <h4 className='font-bold text-[18px]'>Support & Maintenance</h4>
                    <p className='text-[grey]'>Ongoing support and maintenance to keep your solution running smoothly.</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default CustomDevelopmentCntn