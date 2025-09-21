import React from 'react'

export const ImgDiv = ({ className, src, alt ,onlcick=null}) => {
  return (
    <div className={className}>
        <img src={src} alt={alt} onClick={onlcick}/>
    </div>
  )
}

export default ImgDiv
