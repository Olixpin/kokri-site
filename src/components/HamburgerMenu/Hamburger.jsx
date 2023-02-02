import React, { useState } from "react"
import "./Hamburger.css"
import { Modal } from "../Modal"
import { Menus } from "../Menus"

const Hamburger = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="hamburger-menu">
        <button
          onClick={() => {
            setOpen(!open)
          }}
        >
          <span
            className="bar"
            style={{
              transform: open
                ? "translateX(0px) translateY(5px) rotate(45deg)"
                : "",
            }}
          ></span>
          <span
            className="bar"
            style={{
              transform: open
                ? "translateX(0px) translateY(-3px)  rotate(-45deg)"
                : "",
            }}
          ></span>
        </button>
      </div>

      {open && (
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
