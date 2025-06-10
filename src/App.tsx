import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Certificates from "./pages/Certificates"
import Courses from "./pages/Courses"

function App() {

  return (
    <div className="flex min-h-screen theme-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
   </div>
  )
}

export default App
