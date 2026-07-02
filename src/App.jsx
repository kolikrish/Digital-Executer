import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import { ScrollProgress } from "./components/ui/scroll-progress"
import { useEffect, useState } from "react"
import { AnimatePresence } from "motion/react"
import Loader from "./components/loader/Loader"
import LegalPage from "./pages/LegalPage"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const timeout = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = ""
    }, 3000)

    return () => {
      clearTimeout(timeout)
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <>
    <AnimatePresence mode="wait">
      {isLoading && <Loader />}
    </AnimatePresence>
    <ScrollProgress className="z-100 h-1 bg-linear-to-r from-[#8F6F3E] via-primary to-[#F7E7B6]" />
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/legal/:slug" element={<LegalPage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App;
