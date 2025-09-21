import React from 'react'

export const ImgDiv = ({ className, src, alt }) => {
  return (
    <div className={className}>
        <img src={src} alt={alt}/>
    </div>
  )
}

export default ImgDiv
