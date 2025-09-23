import { useState ,useEffect } from 'react'
import './App.css'
import { Auth } from './pages/auth'
import 'primeicons/primeicons.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from './pages/Home'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Home/>
      </div>
      
    },
     {
      path:"/auth",
      element:
         <div>
        <Auth/>
        </div>
      
    }
  ]
);
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      // offset: -50, 
    });
  }, []);
  return (
    <>
         <RouterProvider router={router} />
    </>
  )
}

export default App
