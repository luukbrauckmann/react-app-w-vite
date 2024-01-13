import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Dashboard from "./routes/Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
