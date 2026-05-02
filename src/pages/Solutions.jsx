import React from 'react'
import StikcyBanner from '../components/StikcyBanner'
import ProjectFilter from '../components/ProjectFilter'

const Solutions = () => {
  return (
    <div>
        <StikcyBanner classProperty="max-w-[700px] text-center" stickyBannerBg="bg-[#fefefe]" titleSize="text-[48px] font-bold" peraClr="text-[grey]" stickyTitle="Our Portfolio" stickyPera="Explore our collection of successful projects that showcase our expertise and innovative solutions."/>
        <ProjectFilter />
    </div>
  )
}

export default Solutions