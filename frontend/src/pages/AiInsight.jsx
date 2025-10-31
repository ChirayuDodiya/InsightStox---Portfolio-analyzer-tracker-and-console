import React from 'react'
import BotSidebar from '../components/BotSidebar'
import ChatWindow from '../components/ChatWindow'
import './AiInsight.css'
const Home = () => {
  return (
    <div className="home">
      <BotSidebar />
      <div className="main-content">
        <div className="top-bar">
        </div>
        <ChatWindow />
      </div>
    </div>
  )
}

export default Home