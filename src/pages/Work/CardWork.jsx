import React from "react"
import "./CardWork.css"

const CardWork = ({ id, name, url, background }) => {
  return (
    <article className="section-work-grid-box">
      <h5>&nbsp;</h5>
      <div className="work-link">
        <span>{name}</span>
      </div>
      <div className="work-image">
        <a
          href={url}
          className=""
          title="Seedlip"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></a>
      </div>
    </article>
  )
}

export default CardWork
