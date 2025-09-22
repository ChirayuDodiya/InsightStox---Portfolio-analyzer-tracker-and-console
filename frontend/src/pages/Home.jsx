import React, { useState } from "react";
import dark_mode_logo from "../assets/Logodark.png";
import web_logo_without_bg_darkmode from "../assets/web_logo_without_bg_darkmode.png";
import web_logo_without_bg_lightmode from "../assets/web_logo_without_bg_lightmode.png";
import "./Home.css";
import dark_theme_logo from "../assets/mode-symbol.svg";
import light_theme_logo from "../assets/light_theme_logo.png";
import home_background from "../assets/home-page-bg.jpg";
import dashboard_background from "../assets/desh_board.png";
import watchlist from "../assets/watchlist.png";
import Dynamic_portfolio from "../assets/Dynamic-Portfolio.png";
import Unified_deshboard from "../assets/Unified-Dashboard.png";
import intellSence from "../assets/IntellSence.png";
import ImgDiv from "../components/ImgDiv.jsx";
import ButtonDiv from "../components/ButtonDiv.jsx";
import TextDiv from "../components/TextDiv.jsx";
import upArrow from "../assets/upArrow.png"
import optimize_act from "../assets/optimize_act.png";
import trackPerformace from "../assets/trackPerformance.png";
import addPortfolio from "../assets/addPortfolio.png";
import creatACC from "../assets/creatACC.png";
import downArrow from "../assets/downArrow.png"
import github_logo from "../assets/github_logo.png"

export const Home = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [darkMode ,setDarkMode] = useState(true);
  function toggleArrow(index) { 
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div className="container">
      <div className="home-main">
        <div className="navbar">
          <div className="left_btn logo">
            <img src={without_bg_logo} alt="logo without background" />
          </div>

          <div className="center_btn">
            <ButtonDiv className="features_btn navbar_btn" val="Features" />
            <ButtonDiv className="FAQ_btn navbar_btn" val="FAQs" />
            <ButtonDiv className="How_it_works_btn navbar_btn" val="How it Works ? " />
          </div>

          <div className="right_btn">
            <ButtonDiv className="login_btn navbar_btn" val="Log In" />
            <ImgDiv className="mode_btn" src={darkMode==true ? light_theme_logo : dark_theme_logo} alt="Toggle Mode" onlcick={() => setDarkMode(!darkMode)}/> 
          </div>


        </div>
        <div className="main_page">


          <div className="home-body">
            <ImgDiv className="home_img" src={home_background} alt="Home Background" />

            <ImgDiv className="home_img" src={home_background} alt="Home Background" />

            <div className="middle_text_part">
              <TextDiv tagName="h1" className="title" data_aos="fade-down" val={<>Go Beyond Guesswork.<br />Invest with <span style={{color : "#00C853"}}>Insight</span>.</>}/>
              <TextDiv tagName="p" className="subtitle" data_aos="fade-up" val={<>Empower your financial decisions with our platform's <br /> advanced analytics and intelligent forecasting.</>}/>
              <ButtonDiv className="get_started_btn" data_aos="zoom-in" val="Get Started"/>
            </div>

          </div>
      

          <div className="dash_board_template" data-aos="fade-up">
            <h1>Unified Dashboard</h1>
            <img src={dashboard_background} alt="Dashboard Background" />
          </div>

          <div className="features_div" data_aos="fade-up">
            <TextDiv tagName="h1" className="features_title_div" data_aos="fade-up"  val={<>Everything You Need to Invest <br /> Smarter</>}/>
            <div className="features_section" data-aos="fade-up">

              <div className="features_card_1 features_card">
                <ImgDiv className="feature_img" src={watchlist} alt="watchlist logo" />
                <TextDiv tagName="h2" tagName2="p" className="feature_text_div"  val="Smart Watchlist" val2="Create your custom watchlist, keep an eye on opportunities that matter to you."/>
                <div className="see_detail_button">
                    <button>See in detail</button>
                </div>
              </div>

              <div className="features_card_2 features_card">
                <ImgDiv className="feature_img" src={Dynamic_portfolio} alt="dynamic portfolio logo" />
                <TextDiv className="feature_text_div" tagName="h2" tagName2="p" val="Dynamic Portfolio" val2="Create and manage your portfolio and get a clear view of your investments."/>
                <div className="see_detail_button">
                    <button>See in detail</button>
                </div>
              </div>

              <div className="features_card_3 features_card">
                <ImgDiv className="feature_img" src={Unified_deshboard} alt="portfolio analysis log" />
                <TextDiv className="feature_text_div" tagName="h2" tagName2="p" val="Unified Dashboard" val2="Experience a dashboard that brings your investments and performance into one place."/>
                <div className="see_detail_button">
                    <button>See in detail</button>
                </div>
              </div>


              <div className="features_card_4 features_card">
                <ImgDiv className="feature_img" src={intellSence} alt="intellSence logo" />
                <TextDiv className="feature_text_div" tagName="h2" tagName2="p"  val="Intelligent Insights" val2="Get smarter, insightful and more confident decisions with AI-powered analyzer."/>
                <div className="see_detail_button">
                    <button>See in detail</button>
                </div>
              </div>
                
            </div>
          </div>

          <div className="powerful_features" data-aos="fade-up">
            <TextDiv tagName="h1" className="p_features_title_div" data_aos="fade-up" val={<>Unlock powerful insights in four <br/> simple steps.</>}/>
            <div className="powerful_features_section" data-aos="fade-up">

              <div className="p_features_card_1 p_features_card">
                <ImgDiv className="p_feature_img" src={creatACC} alt="Creat account img" />
                <TextDiv tagName="h2" tagName2="p" className="p_feature_text_div" val="1. Create Your Account" val2="Create your secure account to access your personalized dashboard."/>
              </div>

              <div className="p_features_card_2 p_features_card">
                <ImgDiv className="p_feature_img" src={addPortfolio} alt="add portfolio logo" />
                <TextDiv className="p_feature_text_div" tagName="h2" tagName2="p" val="2. Add Portfolio" val2="Connect your brokerage or manually add assets to build your portfolio"/>
              </div>

              <div className="p_features_card_3 p_features_card">
                <ImgDiv className="p_feature_img" src={trackPerformace} alt="portfolio Tracking log" />
                <TextDiv className="p_feature_text_div" tagName="h2" tagName2="p" val="3. Track Performance" val2="Monitor real-time performance with clear charts and key metrics."/>
              </div>

              <div className="p_features_card_4 p_features_card">
                <ImgDiv className="p_feature_img" src={optimize_act} alt="optimize & act logo" />
                <TextDiv className="p_feature_text_div" tagName="h2" tagName2="p" val="4. Optimize & Act" val2="Use insights to optimize your portfolioaand make informed trades."/>
              </div>
                
            </div>
          </div>

          <div className="FAQs_div" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
            <TextDiv className="FAQ_title" tagName="h1" val="Frequently Asked Questions"/>
            <div className="question_div">
              <div className="que1 que">
                <div className="innerBoxOfQue">
                  <h2>Q : Is my financial data secure?</h2>
                  <ImgDiv className="arrow_img_div" src={openIndex==1 ? upArrow : downArrow} alt="Down Arrow logo" onlcick={() => toggleArrow(1)}/>
                </div>
                <p className="answer_text" style={{display : openIndex==1 ? "block" : "none"}}>Absolutely. We use bank-level encryption and follow industry best practices to ensure your data is always protected. We will never share your personal or financial data without your explicit consent.</p>
              </div>

              <div className="que2 que">
                <div className="innerBoxOfQue">
                  <h2>Q : Is InsightStox a financial advisor?</h2>
                  <ImgDiv className="arrow_img_div" src={downArrow} alt="Down Arrow logo" onlcick={() => toggleArrow(2)}/>
                </div>
                <p className="answer_text" style={{display : openIndex==2 ? "block" : "none"}}>InsightStox offers a powerful free plan that includes a dashboard, portfolio tracking, and a limited number of AI insights per month. For unlimited insights, advanced analytics, and priority support, you can upgrade to our Pro plan. You can find detailed information on our pricing page.</p>
              </div>

              <div className="que3 que">
                <div className="innerBoxOfQue">
                  <h2>Q : What is the pricing for InsightFolio?</h2>
                  <ImgDiv className="arrow_img_div" src={downArrow} alt="Down Arrow logo" onlcick={() => toggleArrow(3)}/>
                </div>
                <p className="answer_text" style={{display : openIndex==3 ? "block" : "none"}}>Our AI analyzes market data from trusted sources, including real-time price feeds, historical performance, and key financial metrics. It uses this data to identify trends and patterns, generating insights based on established investment principles to help you optimize your portfolio.</p>
              </div>
              <div className="subtitle">
                <h2>
                  Empower your financial decisions with our platform's <br />{" "}
                  advanced analytics and intelligent forecasting.
                </h2>
              </div>

              <div className="que5 que">
                <div className="innerBoxOfQue">
                  <h2>Q : How does the AI generate its suggestions?</h2>
                  <ImgDiv className="arrow_img_div" src={downArrow} alt="Down Arrow logo" onlcick={() => toggleArrow(5)}/>
                </div>
              <p className="answer_text" style={{display : openIndex==5 ? "block" : "none"}}>Absolutely. We use bank-level encryption and follow industry best practices to ensure your data is always protected. We will never share your personal or financial data without your explicit consent.</p>
              </div>
                
            </div>
          </div>


          <div className="signup_div" data-aos="fade-up">
            <TextDiv className="signup_text" tagName="h1" tagName2="p" val={<>Ready to Take Control of Your <br/>Investments ?</>} val2="Sign up for free and start making smarter, data-backed decisions today."/>
            <ButtonDiv className="login_btn navbar_btn" val="Sign Up Now" />
          </div>


          <div className="footer_div" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
            <div className="footer_text_part">
              <div className="footer_upper_text_part">
                <div className="footer_first_column column_div">
                  <ImgDiv className="footer_web logo" src={darkMode==true ? web_logo_without_bg_darkmode : web_logo_without_bg_lightmode} alt="logo without background"/>
                  <TextDiv tagName="p" className="tagline_text" val={<>Analyze Smarter,<br/>Invest Better</>} />
                  <ImgDiv className="github_logo" src={github_logo} alt="Github logo"/>
                </div>

                <div className="footer_second_column column_div">
                  <TextDiv tagName="h2" className="navigation_text" val="NAVIGATION" />
                  <TextDiv tagName="a" className="feature_text" val="Features" />
                  <TextDiv tagName="a" className="FAQ_text" val="FAQs" />
                  <TextDiv tagName="a" className="how_it_works_text" val="How It Works?" />
                </div>

                <div className="footer_third_column column_div">
                  <TextDiv tagName="h2" className="legal_text" val="LEGAL" />
                  <TextDiv tagName="a" className="privacy_policy_text" val="Privacy Policy" />
                  <TextDiv tagName="a" className="terms_of_service_text" val="Terms Of Service" />
                  <TextDiv tagName="a" className="contact_us_text" val="Contact US" />
                </div>
              </div>
              <div className="footer_below_text_part">
                <TextDiv tagName="p" className="rights_text"  val={<>© 2025 InsightStox. All Rights Reserved. This platform is for demonstration purposes only. All financial data and <br/>AI-powered suggestions are for informational purposes and should not be considered financial advice.</>}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
