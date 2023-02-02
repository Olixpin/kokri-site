import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Error } from "./pages/Error"
import { Location } from "./pages/Routes/"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppProvider } from "./context/context"

const router = createBrowserRouter([
  {
    path: "/",
    component: App,
    element: <App />,
    errorElement: <Error />,

    children: [
      {
        path: "/location",
        element: <Location />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AppProvider>
  </React.StrictMode>
)
