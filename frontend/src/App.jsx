import { useState ,useEffect } from 'react'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
// import { Auth } from './pages/auth'
import { Home } from './pages/Home'

function App() {
  useEffect(() => {
    AOS.init({
       duration: 1200,   // smooth animations
      once: true,       // only animate once on scroll
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <Home />
    </>
  )
}

export default App
