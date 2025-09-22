import React from 'react'

export const TextDiv = ({tagName,tagName2="",className,data_aos=null,val,val2}) => {
    const Tag = tagName;
    const Tag2 = tagName2;
  return (
    <div className={className}>
        <Tag data-aos={data_aos}>{val}</Tag>
        {Tag2!=="" && <Tag2 data-aos={data_aos}>{val2}</Tag2>}
    </div>
  )
}

export default TextDiv
