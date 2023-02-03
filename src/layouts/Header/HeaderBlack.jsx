import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/kokri-white.svg"
import "./Header.css"
import { Hamburgerblack } from "../../components/HamburgerMenu"

const HeaderBlack = () => {
  return (
    <header className="header header-fixed">
      <div className="header-content">
        <div className="header-wrap">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="kokri" />
            </Link>
          </div>
          <HamburgerBlack />
        </div>
      </div>
    </header>
  )
}

export default HeaderBlack
