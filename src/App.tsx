import {CssBaseline } from "@mui/material"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import MainWrapper from "./pages/MainWrapper/MainWrapper"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainWrapper />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "room",
        element: <></>,
      },
      {
        path: "room/:id/",
        element: <></>,
      },
    ],
  },
])

function App() {

  return (
      <>
          <CssBaseline />
          <RouterProvider router={router} />
      </>
  )
}

export default App
