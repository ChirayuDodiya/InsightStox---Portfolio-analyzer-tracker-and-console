import React from 'react'
export const ImgDiv = ({ className, src, alt, onClick = null }) => {
  return (
    <div className={className}>
        <img src={src} alt={alt} onClick={onClick}/>
    </div>
  )
}

export default ImgDiv
