import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import { ScrollProgress } from "./components/ui/scroll-progress"

const App = () => {
  return (
    <>
    <ScrollProgress className="z-100 h-1 bg-linear-to-r from-primary via-[#ff8a3d] to-white/80" />
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App;