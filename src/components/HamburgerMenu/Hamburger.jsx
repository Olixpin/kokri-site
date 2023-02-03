import React, { useState } from "react"
import "./Hamburger.css"
import { Modal } from "../Modal"
import { Menus } from "../Menus"
import { useAppContext } from "../../context/context"
import { useLocation } from "react-router-dom"

const Hamburger = () => {
  const { openMenu, toggleMenu } = useAppContext()

  const { pathname } = useLocation()

  return (
    <div>
      <div className="hamburger-menu">
        <button
          onClick={() => {
            toggleMenu()
          }}
        >
          <span
            className={`bar ${
              openMenu || pathname === "/" ? "white" : "bar-black"
            }`}
            style={{
              transform: openMenu
                ? "translateX(0px) translateY(5px) rotate(45deg)"
                : "",
            }}
          ></span>
          <span
            className={`bar ${
              openMenu || pathname === "/" ? "white" : "bar-black"
            }`}
            style={{
              transform: openMenu
                ? "translateX(0px) translateY(-3px)  rotate(-45deg)"
                : "",
            }}
          ></span>
        </button>
      </div>

      {openMenu && (
        <Modal className="background menus-wrapper">
          <div className="menu-container">
            <div className="main-content">
              <div className="col1">&nbsp;</div>
              <div className="col2">
                <Menus />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Hamburger
