import React, { useState, useRef, useEffect, use } from "react";
import { useAppContext } from "../context/AppContext";
import "../components/BotSidebar.css";
import logo from "../assets/web_logo_without_bg_darkmode.png";
import close_icon from "../assets/closeIcon.png";
import open_icon from "../assets/openIcon.png";
const BotSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className={`bot-sidebar ${isOpen ? "open" : "close"}`}>
      {/* close icon */}
      <img
        src={isOpen ? close_icon : open_icon}
        alt="toggle sidebar icon"
        className="bot-toggle-sidebar-btn"
        height={35}
        onClick={toggleSidebar}
      />

      {isOpen && (
        <>
          {/* Logo */}
          <div className="bot-logo-div">
            <img
              src={logo}
              alt="chatBot logo"
              className="bot-sidebar-logo"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BotSidebar;
