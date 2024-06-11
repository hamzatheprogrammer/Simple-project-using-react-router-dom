import React from "react";
import Home from './components/Home'
import About from './components/About'
import Navbar from "./components/NavBar";
import User from "./components/User";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";



function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/> <Home/></>
    },
    {
      path: "/about",
      element: <><Navbar/> <About/></>
    },
    {
      path: "/users/:username",
      element: <><Navbar/> <User/></>
    }
  ])
  return(
    <>

    
    <RouterProvider router={router}/>
    </>
  )
}
export default App;