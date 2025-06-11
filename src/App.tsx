import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Certificates from "./pages/Certificates"
import Courses from "./pages/Courses"
import NavBar from "./components/Navbar"
import NotFound from "./pages/NotFound"

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
          {/* 404 handling */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </main>
   </div>
  )
}

export default App
