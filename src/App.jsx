import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Sistemas from "./components/Sistemas"
import Galeria from "./components/Galeria"
import SobreMi from "./components/SobreMi"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

export default function App() {
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
