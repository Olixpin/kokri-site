import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/kokri-white.svg"
import LogoBlack from "../../assets/images/kokri-black.svg"
import "./Header.css"
import { Hamburger } from "../../components/HamburgerMenu"
import { useLocation } from "react-router-dom"
import { useAppContext } from "../../context/context"

const Header = () => {
  const { pathname } = useLocation()
  const { openMenu, changeHeader } = useAppContext()

  return (
    <header
      className={`header header-fixed ${changeHeader ? "header-active" : ""}`}
    >
      <div className="header-content">
        <div className="header-wrap">
          <div className="logo">
            {openMenu || pathname === "/" ? (
              changeHeader ? (
                <Link to="/">
                  <img src={LogoBlack} alt="kokri" />
                </Link>
              ) : (
                <Link to="/">
                  <img src={Logo} alt="kokri" />
                </Link>
              )
            ) : (
              <Link to="/">
                <img src={LogoBlack} alt="kokri" />
              </Link>
            )}
          </div>
          <Hamburger />
        </div>
      </div>
    </header>
  )
}

export default Header
