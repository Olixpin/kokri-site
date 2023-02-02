import React from "react"
import "./Hero.css"
import BackgroundVideo from "../../assets/videos/hero.mp4"

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop className="video" poster={BackgroundVideo}>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>
          Design <span className="hero-subtitle">for life</span>
        </h1>
      </div>
    </div>
  )
}

export default Hero
