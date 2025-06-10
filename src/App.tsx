import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Certificates from "./pages/Certificates"
import Courses from "./pages/Courses"
import NavBar from "./components/Navbar"

function App() {

  return (
    <div className="flex min-h-screen theme-bg">
      
      <NavBar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>
   </div>
  )
}

export default App
