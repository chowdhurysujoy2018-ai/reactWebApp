import React from 'react'
import GlobalSmallHeader from './GlobalSmallHeader'

const ClientSuccess = () => {
  return (
    <div className='bg-[#f9fdfa] py-12'>
        <div className="custom-container">
            <GlobalSmallHeader className="items-center mb-[50px]" smallTitleBgClr="inline-flex item-center justify-center bg-[#dcfce7] text-[#1d4d16]" mainPeraClr="text-[#6b7280]" smallTitle="Client Success" mainHeading="What Our Clients Say" mainPera="Don't just take our word for it. Hear from our satisfied clients about their experience working with DotLinker Technologies."/>
            <div className='bg-white rounded-2xl shadow-xl p-8 md:p-12 relative w-[775px] m-auto reltive'>
                <span className='inline-flex items-center justify-center h-[60px] w-[60px] bg-green-900 absolute top-[-30px] rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote text-white"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                </span>
                <iframe className='w-full h-[380px]'
                    src="https://www.youtube.com/embed/JgIwO_7vHck?autoplay=1&mute=1&controls=0&loop=1&playlist=JgIwO_7vHck"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; clipboard-write; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
  )
}

export default ClientSuccess