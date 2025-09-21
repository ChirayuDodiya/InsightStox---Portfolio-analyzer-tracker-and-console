import { useState ,useEffect } from 'react'
import './App.css'
import { Auth } from './pages/auth'
import 'primeicons/primeicons.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from './pages/Home'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Auth />
    </>
  )
}

export default App
