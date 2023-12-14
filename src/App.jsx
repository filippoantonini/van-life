import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"
import VanDetail from "./pages/VanDetail.jsx"
import Layout from "./components/Layout.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Vans" element={<Vans />} />
          <Route path="/Vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}





export default App
