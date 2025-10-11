import React from "react";
import web_logo_without_bg_darkmode from "../assets/web_logo_without_bg_darkmode.png";
import web_logo_without_bg_lightmode from "../assets/web_logo_without_bg_lightmode.png";
import github_logo from "../assets/github_logo.png";
import TextDiv from "./TextDiv.jsx";
import ImgDiv from "./ImgDiv.jsx";
import "./Footer.css";

const Footer = ({ darkMode }) => {
  return (
    <div className="footer_div" data-aos="fade-up">
      <div className="footer_text_part">
        <div className="footer_upper_text_part">
          <div className="footer_first_column column_div">
            <div className="footer_web logo">
              <a href="#">
                <img 
                  src={darkMode ? web_logo_without_bg_darkmode : web_logo_without_bg_lightmode} 
                  alt="Website logo" 
                />
              </a>
            </div>
            <TextDiv tagName="p" className="tagline_text" val={<>Analyze Smarter,<br/>Invest Better</>} />
            <ImgDiv className="github_logo" src={github_logo} alt="Github logo"/>
          </div>

          <div className="footer_second_column column_div">
            <TextDiv tagName="h2" className="navigation_text" val="NAVIGATION" />
            <TextDiv tagName="a" className="feature_text" val="Features" href="#feature" />
            <TextDiv tagName="a" className="FAQ_text" val="FAQs" href="#FAQs" />
            <TextDiv tagName="a" className="how_it_works_text" val="How It Works?" href="#HowItWorks" />
          </div>

          <div className="footer_third_column column_div">
            <TextDiv tagName="h2" className="legal_text" val="LEGAL" />
            <TextDiv tagName="a" className="privacy_policy_text" val="Privacy Policy" />
            <TextDiv tagName="a" className="terms_of_service_text" val="Terms Of Service" />
            <TextDiv tagName="a" className="contact_us_text" val="Contact US" />
          </div>
        </div>
        <div className="footer_below_text_part">
          <TextDiv 
            tagName="p" 
            className="rights_text"  
            val={<>© 2025 InsightStox. All Rights Reserved. This platform is for demonstration purposes only. All financial data and <br/>AI-powered suggestions are for informational purposes and should not be considered financial advice.</>}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
