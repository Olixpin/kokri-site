import React from "react"
import { Link } from "react-router-dom"
import menus from "../../utils/menus"
import socialMedias from "../../utils/socialMedias"
import "./Menus.css"

const Menus = () => {
  return (
    <div className="menus-wrapper">
      <ul className="menus-container">
        {menus.map((menu) => {
          const { id, name, path } = menu
          return (
            <>
              <li key={id}>
                <Link to={path} title={name}>
                  {name}
                </Link>
              </li>
            </>
          )
        })}
      </ul>
      <ul className="social-media-container">
        {socialMedias.map((socialMedia) => {
          const { id, name, path } = socialMedia
          return (
            <>
              <li key={id}>
                <a
                  href={path}
                  title={`Kokribranders on ${name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {name}
                </a>
              </li>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default Menus
