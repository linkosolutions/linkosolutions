import { useState, useEffect, useRef } from "react"
import { SISTEMAS, SITE } from "../data/siteConfig"
import SectionHeader from "./SectionHeader"

export default function Sistemas() {
  return (
    <section id="sistemas" className="py-24 md:py-32 bg-slate-light">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Nuestros sistemas"
          title="Herramientas para tu comercio"
          subtitle="Cada sistema está pensado para resolver problemas reales del día a día."
        />
        <div
          className={`grid gap-8 ${
            SISTEMAS.length === 1
              ? "max-w-3xl mx-auto"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {SISTEMAS.map((sistema) => (
            <SistemaCard key={sistema.id} sistema={sistema} />
          ))}
          {SISTEMAS.length < 3 && <ProximamenteCard />}
        </div>
      </div>
    </section>
  )
}

function SistemaCard({ sistema }) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const fotos = sistema.screenshots || []

  const prev = () => setCurrent((i) => (i === 0 ? fotos.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === fotos.length - 1 ? 0 : i + 1))

  // Bloquear scroll con lightbox abierto
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightbox])

  // Teclado en lightbox
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

  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hola! Me interesa una demo de ${sistema.name}.`
  )}`

  return (
    <>
      <div className="group bg-white border border-slate-mid rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">

        {/* ── Carrusel con drag/swipe ── */}
        {fotos.length > 0 && (
          <Carrusel
            fotos={fotos}
            current={current}
            setCurrent={setCurrent}
            onZoom={() => setLightbox(true)}
            prev={prev}
            next={next}
          />
        )}

        {/* ── Info ── */}
        <div className="p-8">
          <span className="inline-block bg-accent/10 text-accent text-xs font-body font-semibold px-3 py-1 rounded-full mb-4">
            {sistema.badge}
          </span>
          <h3 className="font-display font-bold text-2xl text-ink mb-3 group-hover:text-accent transition-colors">
            {sistema.name}
          </h3>
          <p className="font-body text-ink/60 text-base leading-relaxed mb-6">
            {sistema.description}
          </p>
          <ul className="space-y-2.5 mb-8">
            {sistema.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2.5 font-body text-sm text-ink/70">
                <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
          {sistema.price && (
            <p className="font-display font-bold text-2xl text-ink mb-6">{sistema.price}</p>
          )}
          <a
            href={sistema.ctaHref || waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-ink text-white font-body font-semibold text-sm py-3.5 rounded-xl hover:bg-accent hover:text-ink transition-all duration-200"
          >
            {sistema.ctaLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox
          fotos={fotos}
          current={current}
          setCurrent={setCurrent}
          prev={prev}
          next={next}
          onClose={() => setLightbox(false)}
        />
      )}
    </>
  )
}

// ── Componente Carrusel con drag y swipe ──
function Carrusel({ fotos, current, setCurrent, onZoom, prev, next }) {
  const dragStart = useRef(null)
  const isDragging = useRef(false)
  const [dragOffset, setDragOffset] = useState(0)

  // ── Mouse ──
  const onMouseDown = (e) => {
    dragStart.current = e.clientX
    isDragging.current = false
  }
  const onMouseMove = (e) => {
    if (dragStart.current === null) return
    const diff = e.clientX - dragStart.current
    if (Math.abs(diff) > 5) isDragging.current = true
    setDragOffset(diff)
  }
  const onMouseUp = (e) => {
    if (dragStart.current === null) return
    const diff = e.clientX - dragStart.current
    if (Math.abs(diff) > 50) diff < 0 ? next() : prev()
    dragStart.current = null
    setDragOffset(0)
  }

  // ── Touch ──
  const onTouchStart = (e) => {
    dragStart.current = e.touches[0].clientX
    isDragging.current = false
  }
  const onTouchMove = (e) => {
    if (dragStart.current === null) return
    const diff = e.touches[0].clientX - dragStart.current
    if (Math.abs(diff) > 5) isDragging.current = true
    setDragOffset(diff)
  }
  const onTouchEnd = () => {
    if (dragStart.current === null) return
    const diff = dragOffset
    if (Math.abs(diff) > 50) diff < 0 ? next() : prev()
    dragStart.current = null
    setDragOffset(0)
  }

  const handleClick = () => {
    if (!isDragging.current) onZoom()
  }

  return (
    <div
      className="relative aspect-video bg-ink overflow-hidden select-none cursor-grab active:cursor-grabbing"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Imagen con offset de drag */}
      <img
        key={current}
        src={fotos[current].src}
        alt={fotos[current].label}
        onClick={handleClick}
        draggable={false}
        style={{ transform: `translateX(${dragOffset}px)`, transition: dragOffset === 0 ? "transform 0.2s ease" : "none" }}
        className="w-full h-full object-cover"
      />

      {/* Hint zoom */}
      <div
        onClick={handleClick}
        className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white/80 text-xs font-body px-2.5 py-1 rounded-full flex items-center gap-1.5 cursor-pointer hover:bg-black/70 transition-colors"
      >
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
        Ver en grande
      </div>

      {/* Contador */}
      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white/70 text-xs font-body px-2.5 py-1 rounded-full">
        {current + 1} / {fotos.length}
      </div>

      {/* Label */}
      <div className="absolute bottom-12 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-body font-medium px-2.5 py-1 rounded-full">
        {fotos[current].label}
      </div>

      {/* Flechas */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-6 pb-2 px-2">
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {fotos.map((foto, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className={`flex-shrink-0 w-12 h-8 rounded overflow-hidden border-2 transition-all duration-200 ${
                i === current ? "border-accent" : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img src={foto.src} alt={foto.label} draggable={false} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Lightbox con drag/swipe también ──
function Lightbox({ fotos, current, setCurrent, prev, next, onClose }) {
  const dragStart = useRef(null)
  const isDragging = useRef(false)
  const [dragOffset, setDragOffset] = useState(0)

  const onMouseDown = (e) => { dragStart.current = e.clientX; isDragging.current = false }
  const onMouseMove = (e) => {
    if (dragStart.current === null) return
    const diff = e.clientX - dragStart.current
    if (Math.abs(diff) > 5) isDragging.current = true
    setDragOffset(diff)
  }
  const onMouseUp = () => {
    if (dragStart.current === null) return
    if (Math.abs(dragOffset) > 80) dragOffset < 0 ? next() : prev()
    dragStart.current = null
    setDragOffset(0)
  }

  const onTouchStart = (e) => { dragStart.current = e.touches[0].clientX }
  const onTouchMove = (e) => {
    if (dragStart.current === null) return
    setDragOffset(e.touches[0].clientX - dragStart.current)
  }
  const onTouchEnd = () => {
    if (Math.abs(dragOffset) > 60) dragOffset < 0 ? next() : prev()
    dragStart.current = null
    setDragOffset(0)
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Imagen */}
      <div
        className="relative max-w-5xl w-full px-4 cursor-grab active:cursor-grabbing"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={fotos[current].src}
          alt={fotos[current].label}
          draggable={false}
          style={{ transform: `translateX(${dragOffset}px)`, transition: dragOffset === 0 ? "transform 0.2s ease" : "none" }}
          className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
        />

        {/* Label */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-sm font-body px-4 py-1.5 rounded-full pointer-events-none">
          {fotos[current].label}
        </div>

        {/* Flechas */}
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Contador */}
      <p className="text-white/40 text-sm font-body mt-4">{current + 1} / {fotos.length}</p>

      {/* Thumbnails */}
      <div
        className="flex gap-2 mt-4 overflow-x-auto max-w-2xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {fotos.map((foto, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex-shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all ${
              i === current ? "border-accent" : "border-transparent opacity-40 hover:opacity-70"
            }`}
          >
            <img src={foto.src} alt={foto.label} draggable={false} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <p className="absolute bottom-4 text-white/20 text-xs font-body">
        ← arrastrá o usá las flechas · ESC para cerrar
      </p>
    </div>
  )
}

function ProximamenteCard() {
  return (
    <div className="bg-white/50 border border-dashed border-slate-mid rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
      <div className="w-12 h-12 rounded-full bg-slate-mid flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-ink/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <p className="font-display font-semibold text-ink/30 text-lg">Próximamente</p>
      <p className="font-body text-ink/30 text-sm mt-1">Nuevo sistema en desarrollo</p>
    </div>
  )
}
