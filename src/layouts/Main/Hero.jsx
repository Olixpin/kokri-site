import React from "react"
import "./Hero.css"
import BackgroundVideo from "../../assets/images/background.svg"

const Hero = () => {
  const url =
    "https://res.cloudinary.com/do0hvzerm/video/upload/v1679327558/eebvt4tftbspyohwuwxs.mp4"
  const [src, setSrc] = React.useState(BackgroundVideo)

  React.useEffect(() => {
    const video = document.createElement("video")
    video.preload = "auto"
    console.log(video.duration)

    video.onloadeddata = () => {
      if (video.duration === 0) {
        setSrc(url)
      }
    }

    return () => {
      video.onloadeddata = null
    }
  }, [url])

  return (
    <div className="hero">
      <video
        autoPlay
        muted
        loop
        className="video"
        poster={BackgroundVideo}
        playsInline
      >
        <source src={url} type="video/mp4" />
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
