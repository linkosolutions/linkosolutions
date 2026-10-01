import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CurrencyProvider } from "./context/CurrencyContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Sistemas from "./components/Sistemas"
import SobreMi from "./components/SobreMi"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import ComerciOSPage from "./pages/ComerciOS"

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
    <CurrencyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comercios" element={<ComerciOSPage />} />
          {/* Links viejos (/techpro, /turnate, etc.) llevan a la home en vez de quedar en blanco */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CurrencyProvider>
  )
}
