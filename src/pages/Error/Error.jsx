import React from "react"
import { useNavigate, useRouteError } from "react-router-dom"
import "./Error.css"
import { Footer } from "../../layouts/Footer"
import { Btn } from "../../components/Button"
import { West } from "@mui/icons-material"
import { useParams } from "react-router-dom"

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
            Icon={West}
            text="Go back home"
            className="btn-order"
            handleClick={() => navigate("/")}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Error
