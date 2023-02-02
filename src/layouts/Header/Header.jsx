import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/kokri-white.svg"
import "./Header.css"
import { Hamburger } from "../../components/HamburgerMenu"

const Header = () => {
  return (
    <header className="header header-fixed">
      <div className="header-content">
        <div className="header-wrap">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="kokri" />
            </Link>
          </div>
          <Hamburger />
        </div>
      </div>
    </header>
  )
}

export default Header
