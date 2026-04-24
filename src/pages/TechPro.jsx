import { useState, useEffect } from "react"
import { SISTEMAS, SITE } from "../data/siteConfig"

const sistema = SISTEMAS.find(s => s.slug === "techpro")

export default function TechProPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "TechPro — LinkoSolutions"
  }, [])

  return (
    <div className="min-h-screen bg-slate-light font-body">
      <PageNavbar />
      <HeroProducto />
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

function PageNavbar() {
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola! Quiero probar TechPro.")}`
  return (
    <header className="sticky top-0 z-50 bg-slate-light/90 backdrop-blur-md border-b border-slate-mid">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display font-bold text-xl text-ink">
          Linko<span className="text-accent">Solutions</span>
        </a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-ink font-semibold text-sm px-4 py-2 rounded-full hover:bg-accent-dark transition-colors">
          <WhatsAppIcon />
          Probar gratis
        </a>
      </div>
    </header>
  )
}

function HeroProducto() {
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

        <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white tracking-tight mb-4">
          {sistema.name}
        </h1>

        <p className="font-display font-semibold text-accent text-xl mb-6">{sistema.tagline}</p>

        <p className="font-body text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          {sistema.description}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href={waDemo} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-ink font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-accent/20 hover:-translate-y-0.5">
            <WhatsAppIcon />
            Probar 7 días gratis
          </a>
          <a href={waInfo} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-medium text-base px-8 py-4 rounded-full transition-all duration-200">
            Consultar planes
          </a>
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

// Módulos detallados
const MODULOS = [
  {
    icono: "📱",
    nombre: "Equipos",
    descripcion: "Alta por IMEI único, estados, historial, garantía automática al vender y búsqueda por IMEI, marca o modelo.",
  },
  {
    icono: "📦",
    nombre: "Productos",
    descripcion: "Accesorios, repuestos y electrónica con precios en ARS y USD, control de stock y alertas de mínimo.",
  },
  {
    icono: "🛒",
    nombre: "Ventas",
    descripcion: "Ventas en ARS/USD, múltiples formas de pago, parte de pago, vuelto automático y descuentos.",
  },
  {
    icono: "🔧",
    nombre: "Reparaciones",
    descripcion: "Órdenes de reparación con técnico asignado, historial de estados y seguimiento por cliente.",
  },
  {
    icono: "📅",
    nombre: "Citas",
    descripcion: "Agenda con fecha y hora, estados y link directo a WhatsApp del cliente.",
  },
  {
    icono: "👥",
    nombre: "Clientes",
    descripcion: "Gestión de clientes con historial completo de compras y reparaciones.",
  },
  {
    icono: "🚚",
    nombre: "Proveedores",
    descripcion: "Alta de proveedores con CUIT, teléfono, email y asociación a productos y equipos.",
  },
  {
    icono: "🔍",
    nombre: "Historial IMEI",
    descripcion: "Búsqueda de cualquier equipo por IMEI con historial completo de estados y garantía.",
  },
  {
    icono: "📊",
    nombre: "Reportes",
    descripcion: "Stock valorizado, garantías activas, top productos, ventas por vendedor y ranking de clientes.",
  },
  {
    icono: "🔐",
    nombre: "Multi-local",
    descripcion: "Cada local con sus propios datos aislados, registro propio y panel SuperAdmin.",
  },
  {
    icono: "⚙️",
    nombre: "Roles y usuarios",
    descripcion: "Admin, Vendedor, Técnico y Solo lectura. Controlá qué puede hacer cada uno.",
  },
  {
    icono: "💬",
    nombre: "Soporte",
    descripcion: "Botón flotante de WhatsApp en toda la app para contactarnos en cualquier momento.",
  },
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
  const waDemo = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola! Quiero empezar la prueba gratuita de TechPro.")}`

  return (
    <section className="py-20 bg-slate-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Planes</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-2">Elegí tu plan</h2>
          <p className="text-ink/40 mt-3">Empezá gratis. Escalá cuando lo necesites.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sistema.planes.map((plan) => {
            const waComprar = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hola! Quiero contratar el plan ${plan.nombre} de TechPro.`)}`
            const esPrueba = plan.id === "prueba"
            const esPro = plan.destacado

            return (
              <div key={plan.id} className={`relative rounded-2xl p-8 flex flex-col ${
                esPro
                  ? "bg-ink border-2 border-accent"
                  : "bg-white border border-slate-mid"
              }`}>
                {esPro && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-ink text-xs font-bold px-4 py-1 rounded-full">
                    ⭐ Más popular
                  </div>
                )}

                <h3 className={`font-display font-bold text-xl mb-1 ${esPro ? "text-white" : "text-ink"}`}>
                  {plan.nombre}
                </h3>
                <p className={`text-sm mb-6 ${esPro ? "text-white/40" : "text-ink/50"}`}>{plan.descripcion}</p>

                <div className="flex items-end gap-2 mb-8">
                  <span className={`font-display font-extrabold text-4xl ${esPro ? "text-accent" : "text-ink"}`}>
                    {plan.precio}
                  </span>
                  <span className={`text-sm mb-1 ${esPro ? "text-white/40" : "text-ink/40"}`}>{plan.precioDetalle}</span>
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

                <a
                  href={esPrueba ? waDemo : waComprar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full font-bold text-sm py-3.5 rounded-xl transition-colors ${
                    esPro
                      ? "bg-accent hover:bg-accent-dark text-ink"
                      : esPrueba
                      ? "bg-ink text-white hover:bg-ink/80"
                      : "bg-slate-light border border-slate-mid text-ink hover:border-accent/40"
                  }`}
                >
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
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="font-body font-medium text-white text-sm pr-4">{item.pregunta}</span>
                <svg className={`w-4 h-4 text-accent flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-4">
                  <p className="font-body text-white/50 text-sm leading-relaxed">{item.respuesta}</p>
                </div>
              )}
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
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink mb-4">
          Probalo gratis por 7 días
        </h2>
        <p className="font-body text-ink/60 text-lg mb-10 max-w-xl mx-auto">
          Sin tarjeta. Sin compromiso. Con acceso Pro completo desde el primer día.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={waDemo} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-white font-bold text-base px-8 py-4 rounded-full hover:bg-ink/80 transition-colors shadow-xl">
            <WhatsAppIcon />
            Empezar prueba gratis
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
        <a href="/" className="font-display font-bold text-lg text-white">
          Linko<span className="text-accent">Solutions</span>
        </a>
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
