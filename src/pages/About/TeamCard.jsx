import React from "react"
import PropTypes from "prop-types"
import profile from "../../assets/images/profile-img.png"
import "./TeamCard.css"

const TeamCard = ({ img, fullName, role }) => {
  return (
    <div className="team-card">
      <div className="team-card-img">
        <img src={img} alt={fullName} />
      </div>
      <div className="team-card-content">
        <h3>{fullName}</h3>
        <p>{role}</p>
      </div>
    </div>
  )
}

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
}

TeamCard.defaultProps = {
  img: profile,
  fullName: "John Doe",
  role: "Creative Director",
}

export default TeamCard
