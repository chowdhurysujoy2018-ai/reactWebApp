import React from 'react'

const StikcyBanner = ({stickyBannerBg, stickyTitle, stickyPera, classProperty, titleSize, peraClr}) => {
  return (
    <section className={`${stickyBannerBg}`}>
        <div className={`m-auto pt-[150px] pb-[100px] ${classProperty}`}>
            <h1 className={`mb-[10px] ${titleSize}`}>{stickyTitle}</h1>
            <p className={peraClr}>{stickyPera}</p>
        </div>
    </section>
  )
}

export default StikcyBanner