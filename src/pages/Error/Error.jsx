import React from "react"
import { useRouteError } from "react-router-dom"
import "./Error.css"
import { Footer } from "../../layouts/Footer"

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className="error">
      <div id="error-page">
        <div className="error-content">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occured.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Error
