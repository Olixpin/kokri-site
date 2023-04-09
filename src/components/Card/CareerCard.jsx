import React from "react"
import PropTypes from "prop-types"
import { FiArrowUpRight } from "react-icons/fi"
import { GrLocation } from "react-icons/gr"
import { AiOutlineClockCircle } from "react-icons/ai"
import "./CareerCard.css"
import { Link } from "react-router-dom"

const CareerCard = ({ title, para, location, hours }) => {
  return (
    <div className="career-card">
      <div className="career-card-header">
        <h3>{title}</h3>
        <Link to="/careers">
          Apply <FiArrowUpRight />
        </Link>
      </div>
      <p>{para}</p>
      <div className="buttons">
        <button>
          <GrLocation />
          {location}
        </button>
        <button>
          <AiOutlineClockCircle />
          {hours}
        </button>
      </div>
    </div>
  )
}

CareerCard.propTypes = {
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
}

CareerCard.defaultProps = {
  title: "Title",
  para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  location: "100% Remote",
  hours: "Full Time",
}
export default CareerCard
