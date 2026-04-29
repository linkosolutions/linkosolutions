import { useState, useEffect, useRef } from "react"
import { SISTEMAS, SITE } from "../data/siteConfig"
import { useCurrency } from "../context/CurrencyContext"
import CurrencyPageNavbar from "../components/CurrencyPageNavbar"

const sistema = SISTEMAS.find(s => s.slug === "techpro")

export default function TechProPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "TechPro — LinkoSolutions"
  }, [])

  return (
    <div className="min-h-screen bg-slate-light font-body">
      <CurrencyPageNavbar waText="Hola! Quiero probar TechPro." ctaLabel="Probar gratis" />
      <HeroProducto />
      <CarruselSeccion />
      <FeaturesSeccion />
      <ModulosSeccion />
      <PreciosSeccion />
      <MediosPagoSeccion />
      <RequisitosSeccion />
      <FaqSeccion />
      <CtaFinal />
      <PageFooter />
    </div>
  )
}

function HeroProducto() {
  const { currency } = useCurrency()
  const waDemo = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola! Quiero empezar la prueba gratuita de TechPro.")}`
  const waInfo = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola! Quiero más info sobre TechPro.")}`

  return (
    <section className="relative bg-ink overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(#00C896 1px, transparent 1px), linear-gradient(90deg, #00C896 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {sistema.badge}
        </span>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white tracking-tight mb-4">{sistema.name}</h1>
        <p className="font-display font-semibold text-accent text-xl mb-6">{sistema.tagline}</p>
        <p className="font-body text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">{sistema.description}</p>
        <div className="flex flex-wrap gap-4 justify-center">
  <a href={waDemo} target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-ink font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-accent/20 hover:-translate-y-0.5">
    <WhatsAppIcon />
    Probar 7 días gratis
  </a>
  <a href="https://linkotechpro.vercel.app" target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-base px-8 py-4 rounded-full transition-all duration-200">
    🚀 Acceder al sistema
  </a>
  <button
  onClick={() => document.querySelector("#planes")?.scrollIntoView({ behavior: "smooth" })}
  className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-medium text-base px-8 py-4 rounded-full transition-all duration-200">
  Consultar planes
</button>
</div>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {["✓ 7 días gratis", "✓ Sin tarjeta", "✓ ARS y USD", "✓ Multi-usuario"].map((item, i) => (
            <span key={i} className="text-white/30 text-sm font-body">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function CarruselSeccion() {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const fotos = sistema.screenshots
  const dragStart = useRef(null)
  const isDragging = useRef(false)
  const [dragOffset, setDragOffset] = useState(0)

  const prev = () => setCurrent(i => i === 0 ? fotos.length - 1 : i - 1)
  const next = () => setCurrent(i => i === fotos.length - 1 ? 0 : i + 1)

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightbox])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
      if (e.key === "Escape") setLightbox(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox, current])

  const onMouseDown = (e) => { dragStart.current = e.clientX; isDragging.current = false }
  const onMouseMove = (e) => {
    if (dragStart.current === null) return
    const diff = e.clientX - dragStart.current
    if (Math.abs(diff) > 5) isDragging.current = true
    setDragOffset(diff)
  }
  const onMouseUp = () => {
    if (dragStart.current === null) return
    if (Math.abs(dragOffset) > 60) dragOffset < 0 ? next() : prev()
    dragStart.current = null; setDragOffset(0)
  }
  const onTouchStart = (e) => { dragStart.current = e.touches[0].clientX }
  const onTouchMove = (e) => { if (dragStart.current !== null) setDragOffset(e.touches[0].clientX - dragStart.current) }
  const onTouchEnd = () => {
    if (Math.abs(dragOffset) > 60) dragOffset < 0 ? next() : prev()
    dragStart.current = null; setDragOffset(0)
  }

  return (
    <section className="py-20 bg-ink">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Capturas del sistema</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">El sistema en acción</h2>
        </div>
        <div className="relative aspect-video bg-ink/50 rounded-2xl overflow-hidden border border-white/10 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <img src={fotos[current].src} alt={fotos[current].label} draggable={false}
            onClick={() => { if (!isDragging.current) setLightbox(true) }}
            style={{ transform: `translateX(${dragOffset}px)`, transition: dragOffset === 0 ? "transform 0.2s ease" : "none" }}
            className="w-full h-full object-cover cursor-zoom-in" />
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white/80 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 cursor-pointer" onClick={() => setLightbox(true)}>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
            Ver en grande
          </div>
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white/60 text-xs px-2.5 py-1 rounded-full">{current + 1} / {fotos.length}</div>
          <div className="absolute bottom-12 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">{fotos[current].label}</div>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-6 pb-2 px-2">
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {fotos.map((foto, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`flex-shrink-0 w-14 h-9 rounded overflow-hidden border-2 transition-all ${i === current ? "border-accent" : "border-transparent opacity-40 hover:opacity-70"}`}>
                  <img src={foto.src} alt={foto.label} draggable={false} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center" onClick={() => setLightbox(false)}>
          <div className="relative max-w-5xl w-full px-4" onClick={e => e.stopPropagation()}>
            <img src={fotos[current].src} alt={fotos[current].label} className="w-full max-h-[80vh] object-contain rounded-xl" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-1.5 rounded-full">{fotos[current].label}</div>
            <button onClick={e => { e.stopPropagation(); prev() }} className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={e => { e.stopPropagation(); next() }} className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <p className="text-white/40 text-sm mt-4">{current + 1} / {fotos.length}</p>
          <div className="flex gap-2 mt-3 overflow-x-auto max-w-2xl px-4" onClick={e => e.stopPropagation()}>
            {fotos.map((foto, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`flex-shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all ${i === current ? "border-accent" : "border-transparent opacity-40 hover:opacity-70"}`}>
                <img src={foto.src} alt={foto.label} draggable={false} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <button onClick={() => setLightbox(false)} className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <p className="absolute bottom-4 text-white/20 text-xs">← arrastrá o usá las flechas · ESC para cerrar</p>
        </div>
      )}
    </section>
  )
}

function FeaturesSeccion() {
  return (
    <section className="py-20 bg-slate-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Funcionalidades</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-2">Todo lo que incluye</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {sistema.features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-slate-mid rounded-xl px-5 py-4">
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="font-body text-sm text-ink/80">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const MODULOS = [
  { icono: "📱", nombre: "Equipos", descripcion: "Alta por IMEI único, estados, historial, garantía automática al vender y búsqueda por IMEI, marca o modelo." },
  { icono: "📦", nombre: "Productos", descripcion: "Accesorios, repuestos y electrónica con precios en ARS y USD, control de stock y alertas de mínimo." },
  { icono: "🛒", nombre: "Ventas", descripcion: "Ventas en ARS/USD, múltiples formas de pago, parte de pago, vuelto automático y descuentos." },
  { icono: "🔧", nombre: "Reparaciones", descripcion: "Órdenes de reparación con técnico asignado, historial de estados y seguimiento por cliente." },
  { icono: "📅", nombre: "Citas", descripcion: "Agenda con fecha y hora, estados y link directo a WhatsApp del cliente." },
  { icono: "👥", nombre: "Clientes", descripcion: "Gestión de clientes con historial completo de compras y reparaciones." },
  { icono: "🚚", nombre: "Proveedores", descripcion: "Alta de proveedores con CUIT, teléfono, email y asociación a productos y equipos." },
  { icono: "🔍", nombre: "Historial IMEI", descripcion: "Búsqueda de cualquier equipo por IMEI con historial completo de estados y garantía." },
  { icono: "📊", nombre: "Reportes", descripcion: "Stock valorizado, garantías activas, top productos, ventas por vendedor y ranking de clientes." },
  { icono: "🔐", nombre: "Multi-local", descripcion: "Cada local con sus propios datos aislados, registro propio y panel SuperAdmin." },
  { icono: "⚙️", nombre: "Roles y usuarios", descripcion: "Admin, Vendedor, Técnico y Solo lectura. Controlá qué puede hacer cada uno." },
  { icono: "💬", nombre: "Soporte", descripcion: "Botón flotante de WhatsApp en toda la app para contactarnos en cualquier momento." },
]

function ModulosSeccion() {
  return (
    <section className="py-20 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Módulos</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">Un sistema completo</h2>
          <p className="text-white/40 mt-3 max-w-xl mx-auto">Todo lo que necesita un local de celulares, en un solo lugar.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MODULOS.map((mod, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{mod.icono}</span>
                <h3 className="font-display font-bold text-white text-base">{mod.nombre}</h3>
              </div>
              <p className="font-body text-white/50 text-sm leading-relaxed">{mod.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PreciosSeccion() {
  const { currency } = useCurrency()
  const waDemo = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola! Quiero empezar la prueba gratuita de TechPro.")}`

  return (
    <section id="planes" className="py-20 bg-slate-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Planes</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-2">Elegí tu plan</h2>
          <p className="text-ink/40 mt-3">Empezá gratis. Escalá cuando lo necesites.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sistema.planes.map((plan) => {
            const precio = plan.precios[currency]
            const waComprar = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hola! Quiero contratar el plan ${plan.nombre} de TechPro.`)}`
            const esPrueba = plan.id === "prueba"
            const esPro = plan.destacado

            return (
              <div key={plan.id} className={`relative rounded-2xl p-8 flex flex-col ${esPro ? "bg-ink border-2 border-accent" : "bg-white border border-slate-mid"}`}>
                {esPro && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-ink text-xs font-bold px-4 py-1 rounded-full">⭐ Más popular</div>}
                <h3 className={`font-display font-bold text-xl mb-1 ${esPro ? "text-white" : "text-ink"}`}>{plan.nombre}</h3>
                <p className={`text-sm mb-6 ${esPro ? "text-white/40" : "text-ink/50"}`}>{plan.descripcion}</p>
                <div className="flex items-end gap-2 mb-8">
                  <span className={`font-display font-extrabold text-4xl ${esPro ? "text-accent" : "text-ink"}`}>{precio.monto}</span>
                  <span className={`text-sm mb-1 ${esPro ? "text-white/40" : "text-ink/40"}`}>{precio.detalle}</span>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${esPro ? "text-white/70" : "text-ink/70"}`}>
                      <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                  {plan.noIncluye.map((f, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${esPro ? "text-white/20" : "text-ink/30"}`}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={esPrueba ? waDemo : waComprar} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full font-bold text-sm py-3.5 rounded-xl transition-colors ${
                    esPro ? "bg-accent hover:bg-accent-dark text-ink"
                    : esPrueba ? "bg-ink text-white hover:bg-ink/80"
                    : "bg-slate-light border border-slate-mid text-ink hover:border-accent/40"
                  }`}>
                  <WhatsAppIcon />
                  {esPrueba ? "Empezar prueba gratis" : `Contratar ${plan.nombre}`}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MediosPagoSeccion() {
  return (
    <section className="py-16 bg-white border-y border-slate-mid">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Medios de pago</span>
          <h2 className="font-display font-bold text-2xl text-ink mt-2">Pagá como quieras</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {sistema.mediosPago.map((medio, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-slate-light border border-slate-mid rounded-xl px-5 py-3">
              <span className="text-xl">{medio.icono}</span>
              <span className="font-body font-medium text-sm text-ink">{medio.nombre}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-ink/40 text-xs mt-6 font-body">Coordiná el pago directamente por WhatsApp.</p>
      </div>
    </section>
  )
}

function RequisitosSeccion() {
  return (
    <section className="py-20 bg-slate-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Requisitos</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-2">¿Dónde funciona?</h2>
        </div>
        <div className="max-w-xl mx-auto bg-white border border-slate-mid rounded-2xl overflow-hidden">
          {sistema.requisitos.map((req, i) => (
            <div key={i} className={`flex items-center justify-between px-6 py-4 ${i !== sistema.requisitos.length - 1 ? "border-b border-slate-mid" : ""}`}>
              <span className="font-body text-ink/50 text-sm">{req.label}</span>
              <span className="font-body font-semibold text-ink text-sm">{req.valor}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSeccion() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-20 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">Preguntas frecuentes</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {sistema.faq.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="font-body font-medium text-white text-sm pr-4">{item.pregunta}</span>
                <svg className={`w-4 h-4 text-accent flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && <div className="px-6 pb-4"><p className="font-body text-white/50 text-sm leading-relaxed">{item.respuesta}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaFinal() {
  const waDemo = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola! Quiero empezar la prueba gratuita de TechPro.")}`
  const waInfo = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola! Quiero más info sobre TechPro.")}`
  return (
    <section className="py-24 bg-accent">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink mb-4">Probalo gratis por 7 días</h2>
        <p className="font-body text-ink/60 text-lg mb-10 max-w-xl mx-auto">Sin tarjeta. Sin compromiso. Con acceso Pro completo desde el primer día.</p>
        <div className="flex flex-wrap gap-4 justify-center">
  <a href={waDemo} target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-ink text-white font-bold text-base px-8 py-4 rounded-full hover:bg-ink/80 transition-colors shadow-xl">
    <WhatsAppIcon />
    Empezar prueba gratis
  </a>
  <a href="https://linkotechpro.vercel.app" target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-ink/80 text-white font-medium text-base px-8 py-4 rounded-full hover:bg-ink/60 transition-colors">
    🚀 Acceder al sistema
  </a>
  <a href={waInfo} target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-2 border-2 border-ink/20 text-ink font-medium text-base px-8 py-4 rounded-full hover:border-ink/40 transition-colors">
    Consultar planes
  </a>
</div>
      </div>
    </section>
  )
}

function PageFooter() {
  return (
    <footer className="bg-ink border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="/" className="font-display font-bold text-lg text-white">Linko<span className="text-accent">Solutions</span></a>
        <p className="font-body text-white/20 text-xs">© {new Date().getFullYear()} LinkoSolutions — Todos los derechos reservados</p>
        <a href="/" className="font-body text-white/40 hover:text-accent text-sm transition-colors">← Volver al inicio</a>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
