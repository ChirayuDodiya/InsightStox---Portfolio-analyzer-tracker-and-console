import { useState ,useEffect } from 'react'
import './App.css'
import { Auth } from './pages/auth'
import 'primeicons/primeicons.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard';
import { MyProfile} from './pages/MyProfile';
import AiInsight from './pages/AiInsight';
import Watchlist from './pages/Watchlist';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
     {
      path:"/auth",
      element:<Auth/>      
    },
    {
      path:"/DashBoard",
      element:<Dashboard/>
    },
    {
      path:"/myprofile",
      element:<MyProfile/>
    }
    ,{
      path:"/aiInsight",
      element:<AiInsight/>
    }
    ,{
      path:"/watchlist",
      element:<Watchlist/>
    }
  ]
);
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <>
         <RouterProvider router={router} />
    </>
  )
}

export default App
