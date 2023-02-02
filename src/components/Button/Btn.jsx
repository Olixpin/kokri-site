import React from "react"
import "./Btn.css"

const Btn = ({ text, Icon, handleClick }) => {
  return (
    <button className="btn" onClick={handleClick}>
      {text}
      {Icon && <Icon className="btn-icon" />}
    </button>
  )
}

export default Btn
