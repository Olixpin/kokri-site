import React from "react"
import "./Btn.css"

const Btn = ({ text, Icon, handleClick, className }) => {
  return (
    <button className="btn" onClick={handleClick}>
      <span className={`btn-text ${className}`}>
        {text}
        {Icon && <Icon className="btn-icon" />}
      </span>
    </button>
  )
}

export default Btn
