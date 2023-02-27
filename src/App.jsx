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
import { Work } from "./pages/Work"
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
      { path: "work/:workId", element: <h1>WorkId</h1> },
      { path: "work", element: <Work /> },
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
