import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans/Vans.jsx"
import VanDetail from "./pages/Vans/VanDetail.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Reviews from "./pages/Host/Reviews.jsx"
import Layout from "./components/Layout.jsx"
import React from "react"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Vans" element={<Vans />} />
          <Route path="/Vans/:id" element={<VanDetail />} />
            <Route path="/host" element={<Dashboard />}>
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}





export default App
