import React from 'react'

export const InputField = ({ htmlFor, type, value, onChange, id, placeholder, labelVal, styleVal={}}) => {
  return (
    <div style={styleVal}>                
      <label htmlFor={htmlFor}>{labelVal}</label>
      <input type={type} id={id} value={value} onChange={onChange} placeholder={placeholder} required />
    </div>
  )
}

export default InputField
