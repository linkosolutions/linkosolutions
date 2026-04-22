import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Sistemas from "./components/Sistemas"
import SobreMi from "./components/SobreMi"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import ComerciOSPage from "./pages/ComerciOS"

// Página principal
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sistemas />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ✏️ Para agregar más páginas de sistemas, copiá esta línea */}
        <Route path="/comercios" element={<ComerciOSPage />} />
      </Routes>
    </BrowserRouter>
  )
}
