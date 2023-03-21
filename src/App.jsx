import * as React from "react"
import "./App.css"
import { Home } from "./pages/Home"
import { Routes, Route, Outlet, Link, useRouteError } from "react-router-dom"
import { Error } from "./pages/Error"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./layouts/Layouts"
import { Careers } from "./pages/Careers"
import { Contacts } from "./pages/Contacts"
import { Live } from "./pages/Live"
import { Works, Work } from "./pages/Work"
import { Location } from "./pages/Routes"

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "careers", element: <Careers /> },
      { path: "contact", element: <Contacts /> },
      { path: "live", element: <Live /> },
      { path: "work/:workId", element: <Work /> },
      { path: "work/:workId/:workId", element: <Work /> },
      { path: "work", element: <Works /> },
      { path: "upload", element: <Upload /> },
      { path: "location", element: <Location /> },
      { path: "privacy-policy", element: <Outlet /> },
      { path: "sitemap", element: <Outlet /> },
    ],
  },
])

const App = () => {
  return (
    <RouterProvider
      router={router}
      errorBoundary={RootErrorBoundary}
      fallback={<Fallback />}
    >
      <Routes />
    </RouterProvider>
  )
}

export default App

export function RootErrorBoundary() {
  let error = useRouteError() || useErrorBoundaryError()
  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSN.stringify(error)}</pre>
      <button onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </button>
    </div>
  )
}

export function Fallback() {
  return <p>Performing initial data "load"</p>
}

function Upload() {
  const cloudName = import.meta.env.VITE_CLOUD_NAME
  const presetName = import.meta.env.VITE_PRESET_NAME

  const [cloudImage, setCloudImage] = React.useState("")

  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName,
      uploadPreset: presetName,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info)
        setCloudImage(result.info.secure_url)
      }
    }
  )

  React.useEffect(() => {
    const uploadBtn = document.getElementById("upload-widget")
    uploadBtn.addEventListener("click", () => {
      myWidget.open()
    })

    return () => {
      uploadBtn.removeEventListener("click", () => {
        myWidget.open()
      })
    }
  }, [])

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Upload Data</h1>
      <div
        className="upload-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button id="upload-widget" className="cloudnery-btn">
          Upload files
        </button>

        <img src={cloudImage} alt="" id="upload-image" />
      </div>
    </div>
  )
}
