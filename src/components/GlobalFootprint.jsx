import React from 'react'
import GlobalSmallHeader from './GlobalSmallHeader'

const GlobalFootprint = () => {
  return (
    <div className='py-[60px]'>
        <div className="custom-container">
            <GlobalSmallHeader className="items-center mb-[50px]" smallTitleBgClr="inline-flex item-center justify-center bg-[#dcfce7] text-[#1d4d16]" mainPeraClr="text-[#6b7280]" smallTitle="Global Footprint" mainHeading="Six Years of Growth" mainPera="DotLinker Technologies has expanded its footprint to 27 countries worldwide! 🚀"/>
            <div className='flex gap-4 justify-between items-center'>
                <div className='max-w-[calc(50%-30px)] w-full'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15281527.263685085!2d72.10809512517385!3d20.75721265177787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1762397791138!5m2!1sen!2sin"
                        width="100%"
                        height="380"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
                <div className='max-w-[calc(50%-30px)] w-full'>
                    <h4 className='text-2xl leading-7'>Our Global Presence</h4>
                    <p className='my-[20px] text-[grey]'>DotLinker Technologies has rapidly expanded its reach across multiple continents. Our team of experts collaborates remotely to deliver exceptional solutions to clients worldwide.</p>
                    <ul className='flex flex-col gap-[15px]'>
                        <li>Americas: United States, Canada, Argentina</li>
                        <li>Europe: United Kingdom, Germany, France, Spain, Italy, Norway, Portugal, Switzerland, Sweden, Denmark, Ukraine</li>
                        <li>Asia: Singapore, India, UAE, Japan, Israel, Thailand, Vietnam, Indonesia, Saudi Arabia, Nepal, China</li>
                        <li>Oceania: Australia, New Zealand</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GlobalFootprint