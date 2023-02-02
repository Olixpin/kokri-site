import React from "react"
import { Link } from "react-router-dom"
import footerMenus from "../../utils/footerMenus"
import socialMedias from "../../utils/socialMedias"
import { useAppContext } from "../../context/context"
import "./Footer.css"
import { NewsLetter } from "../../components/NewsLetter"

const Footer = () => {
  const { openModal, isModalOpen } = useAppContext()
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-wrap">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              openModal()
            }}
          >
            Subscribe to our newsletter
          </a>
          <Link to="/location">
            <b>Lagos Nigeria</b>
          </Link>
          <div className="footer-menus">
            {footerMenus.map(({ id, name, path }) => (
              <Link key={id} to={path}>
                {name}{" "}
              </Link>
            ))}
          </div>
          <div className="social-medias">
            {socialMedias.map(({ id, name, path }) => (
              <a href={path} key={id} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ))}
          </div>
          <p className="copywright">
            &copy;Kokribranders 2016 - {new Date().getFullYear()}
          </p>
        </div>
      </div>
      {isModalOpen && <NewsLetter />}
    </footer>
  )
}

export default Footer
