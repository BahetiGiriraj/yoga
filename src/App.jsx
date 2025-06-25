import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Asanas from './Pages/Asanas'
import Navbar from "./Components/Navbar";


import Footer from "./Components/Footer"
import Signup from "./Components/Login";

const App = () => {
  return (
  <>
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/asanas" element={<Asanas />} />
    <Route path="/login" element={<Signup />} />
  </Routes>

  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Footer />
  </div>
</>

  )
}

export default App
