import React from 'react'

export const ButtonDiv = ({className,val,data_aos=null}) => {
  return (
   <div className={className} data-aos={data_aos}>
        <button>{val}</button>
    </div>
  )
}

export default ButtonDiv
