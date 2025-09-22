import React, { useState } from "react";
import 'primeicons/primeicons.css';
export const PasswordInputField = ({ htmlFor, value, onChange, id, placeholder, labelVal, styleVal = {} }) => {
      const [showPassword, setShowPassword] = useState(false);
  return (

    <div style={styleVal}>  
        <label htmlFor={htmlFor}>{labelVal}</label>
        <input type={showPassword ? "text" : "password"} id={id} value={value} onChange={onChange} placeholder={placeholder} required />
         <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
          <span className="eye-icon">
            {showPassword ? <i className="pi pi-eye-slash"></i> : <i className="pi pi-eye"></i>}
          </span>
          </button>
    </div>
    )
}
export default PasswordInputField