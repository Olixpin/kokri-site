import React from "react"
import "./App.css"
import { Footer } from "./layouts/Footer"
import { Outlet } from "react-router-dom"
import { Header } from "./layouts/Header"
import { Home } from "./pages/Home"

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Home />
      <Footer />
    </div>
  )
}

export default App
