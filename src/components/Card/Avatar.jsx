import React from "react"
import "./Avatar.css"

const Avatar = ({ image, name, location, email, text }) => {
  return (
    <div className="avatar">
      <div className="avatar-head">
        <div className="">
          <img src={image || "https://picsum.photos/200"} alt={name} />
        </div>
        <div className="">
          <h3>{name || "Blessing"}</h3>
          <p>{location || "Lagos"}</p>
          <a
            href={
              email ||
              `
              mailto:kokribranders@gmail.com`
            }
          >
            {email || "kokribranders@gmail.com"}
          </a>
        </div>
      </div>
      <div className="avatar-text">
        <p>
          {text ||
            "Having survived a Physics degree and an early career in recruitment, I spent nine years in client services with a wine specialist creative agency before joining Pearlfisher as a Client Director. I am now Pearlfisher's Head of Talent, dedicated to creating a best in class culture and industry-defining, award-winning work that is driven and inspired by identifying, recruiting, retaining and developing the best talent for Pearlfisher at all levels and within all disciplines."}
        </p>
      </div>
    </div>
  )
}

export default Avatar
