import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Technology from "./components/page/Technology"
import Home from "./components/page/Home"
import Destination from "./components/page/Destination"
// import Crew from "./components/page/Crew"
import Page from "./components/page/Page"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page page="home" type="1"/>} />
        <Route path='destination' element={<Page page="destination" type="2"/>} />
        <Route path='crew' element={<Page page="crew" type="1"/>} />
        <Route path='technology' element={<Page page="technology" type="1"/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
