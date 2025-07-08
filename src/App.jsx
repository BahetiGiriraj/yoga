import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import ForgotPassword from "./Pages/ForgotPassword"
import Footer from "./ Layouts/Footer"
import Navbar from "./ Layouts/Navbar"
// import Home from "./Pages/Home"
import About from "./Pages/About"


const App = () => {
  return (
  <>
  <Navbar/>

  <Routes>
    {/* <Route path="/" element={<Home/>}  /> */}
     <Route path="/about" element={<About/>}  />
    <Route path="/forgot-password" element={<ForgotPassword/>} />
     <Route path="/login" element={<Login />} />
  </Routes>

 
    <Footer />
</>

  )
}

export default App
