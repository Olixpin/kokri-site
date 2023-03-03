import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/kokri-white.svg"
import LogoBlack from "../../assets/images/kokri-black.svg"
import "./Header.css"
import { Hamburger } from "../../components/HamburgerMenu"
import { useLocation, useParams } from "react-router-dom"
import { useAppContext } from "../../context/context"

const Header = () => {
  const { pathname } = useLocation()
  const { openMenu, changeHeader } = useAppContext()

  const { workId } = useParams()

  return (
    <header
      className={`header header-fixed ${changeHeader ? "header-active" : ""}`}
    >
      <div className="header-content">
        <div className="header-wrap">
          <div className="logo">
            {openMenu || pathname === "/" || pathname === `/work/${workId}` ? (
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
