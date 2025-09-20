import React from "react";
import dark_mode_logo from "../assets/dark-mode-logo.png";
import without_bg_logo from "../assets/logo-bg-remove.png";
import "./home.css";
import mode_logo from "../assets/mode-symbol.svg";
import home_background from "../assets/home-page-bg.jpg";
import dashboard_background from "../assets/desh_board.png";
import watchlist from "../assets/watchlist.png";
import Dynamic_portfolio from "../assets/Dynamic-Portfolio.png";
import Unified_deshboard from "../assets/Unified-Dashboard.png";
import intellSence from "../assets/IntellSence.png";
import ImgDiv from "../components/imgDiv.jsx";
import ButtonDiv from "../components/ButtonDiv.jsx";
import TextDiv from "../components/TextDiv.jsx";

import optimize_act from "../assets/optimize_act.png";
import trackPerformace from "../assets/trackPerformance.png";
import addPortfolio from "../assets/addPortfolio.png";
import creatACC from "../assets/creatACC.png";
import downArrow from "../assets/downArrow.png"

export const Home = () => {
  return (
    <div className="container">
      <div className="home-main">
        <div className="navbar">
          <ImgDiv className="left_btn logo" src={without_bg_logo} alt="logo without background"/>

          <div className="center_btn">
            <ButtonDiv className="features_btn navbar_btn" val="Features" />
            <ButtonDiv className="contact_btn navbar_btn" val="FAQs" />
            <ButtonDiv className="about_btn navbar_btn" val="How it Works ? " />
          </div>

          <div className="right_btn">
            <ButtonDiv className="login_btn navbar_btn" val="Log In" />
            <ImgDiv className="mode_btn" src={mode_logo} alt="Toggle Mode" />
          </div>

        </div>
        <div className="main_page">

          <div className="home-body">
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

          <div className="features_div">
            <TextDiv tagName="h1" className="features_title_div" data_aos="fade-up" val={<>Everything You Need to Invest <br /> Smarter</>}/>
            <div className="features_section" data-aos="fade-up">

              <div className="features_card_1 features_card">
                <ImgDiv className="feature_img" src={watchlist} alt="watchlist logo" />
                <TextDiv tagName="h2" tagName2="p" className="feature_text_div" data_aos="fade-up" val="Smart Watchlist" val2="Create your custom watchlist, keep an eye on opportunities that matter to you."/>
                <div className="see_detail_button">
                    <button>See in detail</button>
                </div>
              </div>

              <div className="features_card_2 features_card">
                <ImgDiv className="feature_img" src={Dynamic_portfolio} alt="dynamic portfolio logo" />
                <TextDiv className="feature_text_div" tagName="h2" tagName2="p" data_aos="fade-up" val="Dynamic Portfolio" val2="Create and manage your portfolio and get a clear view of your investments."/>
                <div className="see_detail_button">
                    <button>See in detail</button>
                </div>
              </div>

              <div className="features_card_3 features_card">
                <ImgDiv className="feature_img" src={Unified_deshboard} alt="portfolio analysis log" />
                <TextDiv className="feature_text_div" tagName="h2" tagName2="p" data_aos="fade-up" val="Unified Dashboard" val2="Experience a dashboard that brings your investments and performance into one place."/>
                <div className="see_detail_button">
                    <button>See in detail</button>
                </div>
              </div>


              <div className="features_card_4 features_card">
                <ImgDiv className="feature_img" src={intellSence} alt="intellSence logo" />
                <TextDiv className="feature_text_div" tagName="h2" tagName2="p" data_aos="fade-up" val="Intelligent Insights" val2="Get smarter, insightful and more confident decisions with AI-powered analyzer."/>
                <div className="see_detail_button">
                    <button>See in detail</button>
                </div>
              </div>
                
            </div>
          </div>

          <div className="powerful_features">
            <TextDiv tagName="h1" className="p_features_title_div" data_aos="fade-up" val={<>Unlock powerful insights in four <br/> simple steps.</>}/>
            <div className="powerful_features_section" data-aos="fade-up">

              <div className="p_features_card_1 p_features_card">
                <ImgDiv className="p_feature_img" src={creatACC} alt="Creat account img" />
                <TextDiv tagName="h2" tagName2="p" className="p_feature_text_div" data_aos="fade-up" val="1. Create Your Account" val2="Create your secure account to access your personalized dashboard."/>
              </div>

              <div className="p_features_card_2 p_features_card">
                <ImgDiv className="p_feature_img" src={addPortfolio} alt="add portfolio logo" />
                <TextDiv className="p_feature_text_div" tagName="h2" tagName2="p" data_aos="fade-up" val="2. Add Portfolio" val2="Connect your brokerage or manually add assets to build your portfolio"/>
              </div>

              <div className="p_features_card_3 p_features_card">
                <ImgDiv className="p_feature_img" src={trackPerformace} alt="portfolio Tracking log" />
                <TextDiv className="p_feature_text_div" tagName="h2" tagName2="p" data_aos="fade-up" val="3. Track Performance" val2="Monitor real-time performance with clear charts and key metrics."/>
              </div>

              <div className="p_features_card_4 p_features_card">
                <ImgDiv className="p_feature_img" src={optimize_act} alt="optimize & act logo" />
                <TextDiv className="p_feature_text_div" tagName="h2" tagName2="p" data_aos="fade-up" val="4. Optimize & Act" val2="Use insights to optimize your portfolioaand make informed trades."/>
              </div>
                
            </div>
          </div>

          <div className="FAQs_div">
            <TextDiv className="FAQ_title" tagName="h1" data_aos="fade-up" val="Frequently Asked Questions"/>
            <div className="question_div">
              <div className="que1 que" data-aos="fade-up">
                <h2>Q : Is my financial data secure?</h2>
                <ImgDiv className="arrow_img_div" src={downArrow} alt="Down Arrow logo"/>
              </div>
              <div className="que2 que" data-aos="fade-up">
                <h2>Q : Is InsightStox a financial advisor?</h2>
                <ImgDiv className="arrow_img_div" src={downArrow} alt="Down Arrow logo"/>
              </div>
              <div className="que3 que" data-aos="fade-up">
                <h2>Q : What is the pricing for InsightFolio?</h2>
                <ImgDiv className="arrow_img_div" src={downArrow} alt="Down Arrow logo"/>
              </div>
              <div className="que4 que" data-aos="fade-up">
                <h2>Q : Which brokerages can I connect?</h2>
                <ImgDiv className="arrow_img_div" src={downArrow} alt="Down Arrow logo"/>
              </div>
              <div className="que5 que" data-aos="fade-up">
                <h2>Q : How does the AI generate its suggestions?</h2>
                <ImgDiv className="arrow_img_div" src={downArrow} alt="Down Arrow logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
