import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"
import VanDetail from "./pages/VanDetail.jsx"

function App() {

  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <nav>
          <Link to="/Vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />} />
        <Route path="/Vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}





export default App
