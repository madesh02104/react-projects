import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import React from 'react'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow m-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout