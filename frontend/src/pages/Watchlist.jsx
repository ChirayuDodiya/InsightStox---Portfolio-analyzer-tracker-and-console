import React from 'react'
import './Watchlist.css'
import Navbar from '../components/Navbar'
import { useAppContext } from "../context/AppContext";
import DashboardHeader from '../components/Dashboard-Header.jsx';
import Footer from '../components/Footer.jsx';
const watchlist = () => {
      const { darkMode, setDarkMode } = useAppContext();
    
  return (
    <div className="watchlist">
         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} pageType="dashboard"
        profileData={{ name: "Ayush Dhamecha", email: "ma**@gmail.com", }} />
        
        <DashboardHeader darkMode={darkMode}  />
        <div className="watchlist_content">
            
        </div>
        <div className="footer-div">
                <Footer darkMode={darkMode}  
                navigationLinks={[
                    { text: "Portfolio", href: "#" },
                    { text: "AI Insigths", href: "#" },
                    { text: "Wacthlist", href: "#" },
                    { text: "Compare Stocks", href: "#" },

                ]}
                legalLinks={[
                    { text: "Privacy Policy", href: "#privacy" },
                    { text: "Terms Of Service", href: "#terms" },
                    { text: "Contact Us", href: "#contact" },
                ]}/>
            </div>
    </div>
  )
}
export default watchlist;