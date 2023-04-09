import React from "react"
import CareerCard from "./CareerCard"

import "./CareerCardList.css"

const CareerCardList = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => {
        return (
          <CareerCard
            key={index}
            title={card.title}
            para={card.para}
            location={card.location}
            hours={card.hours}
          />
        )
      })}
    </>
  )
}

export default CareerCardList
