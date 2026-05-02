import React from 'react'

const GlobalSmallHeader = ({className, smallTitle, mainHeading, mainPera, smallTitleBgClr, mainPeraClr}) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
        <span className={`px-[10px] ${smallTitleBgClr}`}>{smallTitle}</span>
        <h2 className='text-4xl font-bold'>{mainHeading}</h2>
        <h6 className={mainPeraClr}>{mainPera}</h6>
    </div>
  )
}

export default GlobalSmallHeader