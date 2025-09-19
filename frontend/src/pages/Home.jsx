import React from "react";
import dark_mode_logo from "../assets/dark-mode-logo.png";
import without_bg_logo from "../assets/logo-bg-remove.png";
import "./home.css";
import mode_logo from "../assets/mode-symbol.svg";
import home_background from "../assets/home-page-bg.jpg";
import dashboard_background from "../assets/dash_board.jpg";
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
                <h1>
                  Go Beyond Guesswork.
                  <br />
                  Invest with Insight.
                </h1>
              </div>
              <div className="subtitle">
                <h2>
                  Empower your financial decisions with our platform's <br />{" "}
                  advanced analytics and intelligent forecasting.
                </h2>
              </div>
              <div className="get_started_btn">
                <button>Get Started</button>
              </div>
            </div>
          </div>
          <div className="dash_board_template">
            <div className="dash_board_img_div">
              <img src={dashboard_background} alt="Dashboard Background" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
