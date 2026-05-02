import React from 'react'
import HeroBanner from '../components/HeroBanner'
import GlobalFootprint from '../components/GlobalFootprint'
import TrustedPartners from '../components/TrustedPartners'
import OurServices from '../components/OurServices'
import OurStory from '../components/OurStory'
import ClientSuccess from '../components/ClientSuccess'

const Home = () => {
  return (
    <>
        <HeroBanner />
        <GlobalFootprint />
        <TrustedPartners />
        <OurServices />
        <OurStory />
        <ClientSuccess />
    </>
  )
}

export default Home