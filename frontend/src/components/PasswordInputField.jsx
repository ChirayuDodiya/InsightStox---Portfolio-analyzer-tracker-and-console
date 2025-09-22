import React, { useState } from "react";
import 'primeicons/primeicons.css';
export const PasswordInputField = ({ htmlFor, value, onChange, id, placeholder, labelVal, styleVal = {} }) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <div style={styleVal}>  
            <label htmlFor={htmlFor}>{labelVal}</label>
            <div className="passwordinput">
                <input  type={showPassword ? "text" : "password"} id={id} value={value} onChange={onChange} placeholder={placeholder} required 
                />
               <a className="password-toggle"  onClick={() => setShowPassword(!showPassword)}>
                    <span className="eye-icon">
                        <i className={`pi ${showPassword ? "pi-eye-slash" : "pi-eye"}`}></i>
                    </span>
                </a>
            </div>
        </div>
    )
}
export default PasswordInputField