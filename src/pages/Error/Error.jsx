import React from "react"
import { useNavigate, useRouteError } from "react-router-dom"
import "./Error.css"
import { Footer } from "../../layouts/Footer"
import { Btn } from "../../components/Button"
import { useParams } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"

const Error = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  const { workId } = useParams()
  return (
    <div className="error">
      <div id="error-page">
        <div className="error-content">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occured.</p>
          <p className="para">{<i>{error.statusText || error.message}</i>}</p>
          <Btn
            Icon={BsArrowLeft}
            text="Go back home"
            className="btn-order"
            handleClick={() => navigate(-1)}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Error
