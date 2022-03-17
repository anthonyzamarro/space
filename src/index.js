import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Technology from "./components/page/Technology"
// import Home from "./components/page/Home"
// import Destination from "./components/page/Destination"
// import Crew from "./components/page/Crew"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
