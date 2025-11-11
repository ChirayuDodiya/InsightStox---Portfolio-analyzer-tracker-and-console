import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import DashboardHeader from '../components/Dashboard-Header.jsx';
import Footer from '../components/Footer.jsx';
import { FieldValue } from "../components/FieldValue.jsx";
import { MarketNewsItem } from "../components/MarketMovers/MarketMovers.jsx";
import './StockDetails.css';
import { useNavigate, useParams } from "react-router-dom";

export const StockDetails = () => {
    const BASE_URL = import.meta.env.VITE_BACKEND_LINK;
    const [darkMode, setDarkMode] = useState(true);
    const [buyStock, handleBuyStock] = useState("");
    const [sellStock, handleSellStock] = useState("");
    const [addedStock, handleAdd] = useState("");
    const { symbol } = useParams();
    const [stockData, setStockData] = useState({
        priceInfo: {},
        fundamentals: {},
        financials: {},
        balenceSheet: {},
        profitability: {},
        cashFlow: {},
        fiscalInformation: {},
        Company: {},
    });
    const [newsData, setMarketData] = useState([]);

    console.log(symbol);

    useEffect(() => {
        const getStockDetails = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/v1/dashBoard/stockDetails?ticker=${symbol}`,
                    { withCredentials: true });

                setStockData(res.data?.data || res.data)
            }
            catch (error) {
                console.error("Error fetching stock details:", error);
            }

        };
        getStockDetails();
    }, [symbol]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const news = await axios.get(`${BASE_URL}/api/v1/dashBoard/news/${symbol}`, { withCredentials: true });
                setMarketData(news?.data || news);
            }
            catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        getNews();
    }, [symbol]);

    return (
        <div className="stk-main-page-for-stock">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} pageType="dashboard"
                profileData={{ name: "Ayush Dhamecha", email: "ma**@gmail.com", }} />
            <DashboardHeader darkMode={darkMode} />
            <div className="stk-empty"></div>
            <div className="stk-stock-info-page">

                <div className="stk-stock-head">
                    <img className="stk-stock-icon" src={symbol} alt="Stock image" />
                    <button className="stk-buy" val="Buy" onClick={handleBuyStock}>Buy</button>
                    <button className="stk-sell" val="Sell" onClick={handleSellStock}>Sell</button>
                    <button className="stk-add-watchlist" val="Add" onClick={handleAdd}>Add to watchlist</button>
                </div>

                <div className="stk-stock-name">{symbol}</div>

                <div className="stk-stock-price">
                    <div className="stk-abs">{stockData.priceInfo?.currentPrice ?? stockData.priceInfo?.previousClose ?? "--"}</div>
                    <div
                        className="stk-percentage"
                        style={{
                            color:
                                stockData?.priceInfo?.change > 0
                                    ? "#00C853"
                                    : stockData?.priceInfo?.change < 0
                                    ? "#C81B00"
                                    : "#FFF",   
                        }}
                    >
                        {stockData?.priceInfo?.change ?? "--"} (
                        {stockData?.priceInfo?.changePercentage ?? "--"}%)
                    </div>
                </div>
                <div className="stk-stock-detail-navbar">
                    <a className="stk-detail-button" href="#heads1">Performance</a>
                    <a className="stk-detail-button" href="#heads2">Fundamentals</a>
                    <a className="stk-detail-button" href="#heads3">Financials</a>
                    <a className="stk-detail-button" href="#heads4">News</a>
                    <a className="stk-detail-button" href="#heads5">About Company</a>
                </div>

                <div className="stk-stock-chart">{/*to put*/}</div>

                <div id="heads1">Performance</div>
                <div className="stk-performance">
                    <div className="stk-day-range">Day's range</div>

                    <div className="stk-price-range">
                        <div className="stk-range-field">
                            <span className="stk-low-f">Today's low:</span>
                            <span className="stk-low-v">{stockData.priceInfo?.dayLow ?? "--"}</span>
                        </div>

                        <hr />
                        <div className="stk-range-val">
                            <span className="stk-high-f">Today's high:</span>
                            <span className="stk-high-v">{stockData.priceInfo?.dayHigh ?? "--"}</span>
                        </div>

                    </div>
                </div>
                <div className="stk-more-info">
                    <div className="stk-info-left">
                        <FieldValue
                            className="stk-info"
                            fieldname="Previous Close"
                            value={stockData.priceInfo?.previousClose ?? "--"}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="Open"
                            value={stockData.priceInfo?.open ?? "--"}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="Volume"
                            value={stockData.priceInfo?.volume ?? "--"}
                        />
                    </div>
                    <div className="stk-info-right">
                        <FieldValue
                            className="stk-info"
                            fieldname={`Day's range`}
                            value={(stockData.priceInfo?.dayLow && stockData.priceInfo?.dayHigh) ? `${stockData.priceInfo.dayLow} - ${stockData.priceInfo.dayHigh}` : (stockData.priceInfo?.dayLow ?? stockData.priceInfo?.dayHigh ?? "--")}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="52 week range"
                            value={stockData.priceInfo?.fiftyTwoWeekLow && stockData.priceInfo?.fiftytwoWeekHigh
                                ? `${stockData.priceInfo.fiftyTwoWeekLow} - ${stockData.priceInfo.fiftytwoWeekHigh}`
                                : (stockData.priceInfo?.fiftytwoWeekHigh ?? "--")}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="Market Cap (intraday)"
                            value={
                                stockData.priceInfo?.marketCap
                                    ? Math.round(stockData.priceInfo.marketCap * 100) / 100
                                    : "--"
                            }
                        />
                    </div>
                </div>

                <div id="heads2">Fundamentals</div>
                <div className="stk-fundamentals">
                    <div className="stk-info-left">
                        <FieldValue
                            className="stk-info"
                            fieldname="ROCE (TTM)"
                            value={stockData.fundamentals?.roceTTM ?? "--"}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="P/E Ratio (TTM)"
                            value={stockData.fundamentals?.peRatioTTM ?? "--"}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="P/B Ratio"
                            value={stockData.fundamentals?.pbRatio ?? "--"}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="Industry P/E"
                            value={stockData.fundamentals?.industryPE ?? "--"}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="Debt to Equity"
                            value={stockData.fundamentals?.debtToEquity ?? "--"}
                        />

                    </div>
                    <div className="stk-info-right">
                        <FieldValue
                            className="stk-info"
                            fieldname="ROE"
                            value={stockData.fundamentals?.roeTTM ?? "--"}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="EPS (TTM)"
                            value={stockData.fundamentals?.epsTTM ?? "--"}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="Dividend Yield"
                            value={stockData.fundamentals?.dividendYield ?? "--"}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="Book Value"
                            value={stockData.fundamentals?.bookValue ?? "--"}
                        />
                        <FieldValue
                            className="stk-info"
                            fieldname="Face Value"
                            value={stockData.fundamentals?.faceValue ?? "--"}
                        />

                    </div>
                </div>

                <div id="heads3">Financials</div>
                <div className="stk-financials">
                    <div className="stk-info-left">
                        <div className="stk-info-left-upper">
                            <div className="stk-inc-stat">Income Statement</div>

                            <FieldValue
                                className="stk-info"
                                fieldname="Revenue (TTM)"
                                value={stockData.financials?.revenueTTM ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Revenue Per Share (TTM)"
                                value={stockData.financials?.revenuePerShare ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Quarterly Revenue Growth (YOY)"
                                value={stockData.financials?.earningGrowthQuater ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Gross Profit (TTM)"
                                value={stockData.financials?.grossProfitTTM ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="EBITDA"
                                value={stockData.financials?.ebitda ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Net Income Available to Common (TTM)"
                                value={stockData.financials?.netIncome ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Diluted EPS (TTM)"
                                value={stockData.financials?.dilutedEPS ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Quarterly Earnings Growth (YOY)"
                                value={stockData.financials?.earningGrowthQuater ?? "--"}
                            />

                        </div>
                        <div className="stk-info-left-lower">
                            <div className="stk-prof-eff-metrics">Profitability & Efficiency Metrics</div>

                            <FieldValue
                                className="stk-info"
                                fieldname="Profit Margin"
                                value={stockData.profitability.profitMargin ?? "--"} />
                            <FieldValue
                                className="stk-info"
                                fieldname="Operating Margin (TTM)"
                                value={stockData.profitability.operatingMargin ?? "--"} />
                            <FieldValue
                                className="stk-info"
                                fieldname="Return on Assets (TTM)"
                                value={stockData.profitability.returnOnAssets ?? "--"} />
                            <FieldValue
                                className="stk-info"
                                fieldname="Return on Equity (TTM)"
                                value={stockData.profitability.returnOnEquity ?? "--"} />
                        </div>
                    </div>
                    <div className="stk-info-right">
                        <div className="stk-info-right-upper">
                            <div className="stk-bal-sheet">Balance Sheet</div>

                            <FieldValue
                                className="stk-info"
                                fieldname="Total Cash (MRQ)"
                                value={stockData.balenceSheet?.totalCash ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Total Cash Per Share (MRQ)"
                                value={stockData.balenceSheet?.totalCashPerShare ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Total Debt (MRQ)"
                                value={stockData.balenceSheet?.totalDebt ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Total Debt / Equity (MRQ)"
                                value={stockData.balenceSheet?.deptToEquity ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Current Ratio (MRQ)"
                                value={stockData.balenceSheet?.currentRatioMRQ ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Book Value Per Share (MRQ)"
                                value={stockData.balenceSheet?.bookValuePerShare ?? "--"}
                            />
                        </div>
                        <div className="stk-info-right-middle">
                            <div className="stk-cash-flow-stat">Cash Flow Statement</div>

                            <FieldValue
                                className="stk-info"
                                fieldname="Operating Cash Flow (TTM)"
                                value={stockData.cashFlow?.operatingCashFlow}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Levered Free Cash Flow (TTM)"
                                value={stockData.cashFlow?.freeCashFlow}
                            />
                        </div>
                        <div className="info-right-lower">
                            <div className="fisc-info">Fiscal Information</div>

                            <FieldValue
                                className="stk-info"
                                fieldname="Fiscal Year Ends"
                                value={stockData.fiscalInformation?.fiscalYearEnd ?? "--"}
                            />
                            <FieldValue
                                className="stk-info"
                                fieldname="Most Recent Quarter (MRQ)"
                                value={stockData.fiscalInformation?.MRQ ?? "--"}
                            />
                        </div>
                    </div>
                </div>

                <div id="heads4">News</div>
                <div className="stk-news">
                    <div className="stk-news-head">
                        <div className="stk-rec-news">Recent News: {symbol}</div>
                        <a className="stk-see-more">See more →</a>
                    </div>

                    <div className="stk-news-container">
                        {newsData.length > 0 ? (
                            <div className="stk-market-data">
                                {newsData.map((news, index) => (
                                    <MarketNewsItem
                                        key={index}
                                        headline={news.title}
                                        time={news.providerPublishTime}
                                        link={news.link} />
                                ))}
                            </div>

                        ) : (
                            <div className="stk-market-data">No news available for {symbol}.</div>
                        )
                        }
                    </div>
                </div>

                <div id="heads5">About Company</div>
                <div className="stk-about-company">
                    <h3>{stockData.Company?.longname} ({stockData.Company?.shortname}) </h3>
                    <div className="stk-sub-about">
                        <div className="stk-sub-info">
                            <span id="stk-span1">{stockData.Company.fulltimeemployees}</span>
                            <span id="stk-span2">Full-time employees</span>
                        </div>
                        <div className="stk-sub-info">
                            <span id="stk-span1">{stockData.fiscalInformation?.fiscalYearEnd ?? "--"}</span>
                            <span id="stk-span2">Fiscal year ends</span>
                        </div>
                        <div className="stk-sub-info">
                            <span id="stk-span1">{stockData.Company.sector}</span>
                            <span id="stk-span2">Sector</span>
                        </div>
                        <div className="stk-sub-info">
                            <span id="stk-span1">{stockData.Company?.industry}</span>
                            <span id="stk-span2">Industry</span>
                        </div>
                    </div>
                    <span className="stk-about-desc">{stockData.Company?.longdescription}</span>
                    <a className="stk-company-link" href={stockData.Company.website}>{stockData.Company.website}</a>
                </div>


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
                    ]} />
            </div>
        </div>
    );
};