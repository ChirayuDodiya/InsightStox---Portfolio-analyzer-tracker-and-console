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


export const Home = () => {
  return (
    <div className="container">
      <div className="home-main">
        <div className="navbar">
          <div className="left_btn logo">
            <img src={without_bg_logo} alt="logo without background" />
          </div>

          
          <div className="center_btn">
            <div className="features_btn navbar_btn">
              <button>Features</button>
            </div>

            <div className="contact_btn navbar_btn">
              <button>Contact</button>
            </div>

            <div className="about_btn navbar_btn">
              <button>About</button>
            </div>
          </div>

          <div className="right_btn">
            <div className="login_btn navbar_btn">
              <button>Log In</button>
            </div>
            <div className="mode_btn">
              <img src={mode_logo} alt="Toggle Mode" />
            </div>
          </div>
        </div>
        <div className="main_page">
          <div className="home-body">
            <img src={home_background} alt="Home Background" />
            <div className="middle_text_part">
              <div className="title">
                <h1  data-aos="fade-down">
                  Go Beyond Guesswork.
                  <br />
                  Invest with Insight.
                </h1>
              </div>
              <div className="subtitle">
                <h2 data-aos="fade-up" data-aos-delay="300">
                  Empower your financial decisions with our platform's <br />{" "}
                  advanced analytics and intelligent forecasting.
                </h2>
              </div>
              <div className="get_started_btn" data-aos="zoom-in" data-aos-delay="300">
                <button>Get Started</button>
              </div>
            </div>
          </div>
          <div className="dash_board_template" data-aos="fade-up">
            <img src={dashboard_background} alt="Dashboard Background" />
          </div>

          <div className="features_div">
            <div className="features_title_div">
              <h1>
                Everything You Need to Invest <br />
                Smarter
              </h1>
            </div>

            <div className="features_section" data-aos="fade-up">
              <div className="features_card_1 features_card" data-aos="fade-right">
                <div className="feature_img">
                  <img src={watchlist} alt="watchlist logo" />
                </div>

                <div className="feature_text_div">
                  <h2>Personalized Watchlist</h2>
                  <p>Create your custom watchlist, keep an eye on opportunities that matter to you.</p>
                  <button>See in detail</button>
                </div>

              </div>
              <div className="features_card_2 features_card" data-aos="fade-left">
                <div className="feature_img">
                  <img src={Dynamic_portfolio} alt="dynamic portfolio logo" />
                </div>
                <div className="feature_text_div">
                  <h2>Dynamic Portfolio</h2>
                  <p>create and manage your portfolio and get a clear view of your investments.</p>
                  <button>See in detail</button>
                </div>
              </div>
              <div className="features_card_3 features_card" data-aos="fade-right">
                <div className="feature_img">
                  <img src={Unified_deshboard} alt="portfolio analysis logo" />
                </div>
                <div className="feature_text_div">
                  <h2>Unified Dashboard</h2>
                  <p>Experience a dashboard that brings your investments and performance into one place.</p>
                  <button>See in detail</button>
                </div>
              </div>
              <div className="features_card_4 features_card" data-aos="fade-left">
                <div className="feature_img">
                  <img src={intellSence} alt="intellSence logo" />
                </div>
                <div className="feature_text_div">
                  <h2>IntelliSense</h2>
                  <p>Get smarter, insightful and more confident decisions with AI-powered analyzer.</p>
                  <button>See in detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
