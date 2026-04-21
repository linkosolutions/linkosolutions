import { GALERIA } from "../data/siteConfig"
import SectionHeader from "./SectionHeader"

export default function Galeria() {
  return (
    <section className="py-24 md:py-32 bg-ink overflow-hidden noise-bg">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Galería"
          // ✏️ MODIFICAR en siteConfig.js → GALERIA.title / .subtitle
          title={GALERIA.title}
          subtitle={GALERIA.subtitle}
          dark
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALERIA.images.map((img, i) => (
            <GaleriaCard key={i} img={img} index={i} />
          ))}
        </div>

        {/* Instrucción visible solo en dev */}
        <p className="text-center text-white/20 text-xs font-body mt-8">
          ✏️ Reemplazá las imágenes en{" "}
          <code className="bg-white/10 px-1 rounded">src/data/siteConfig.js</code> →{" "}
          <code className="bg-white/10 px-1 rounded">GALERIA.images[].src</code>
        </p>
      </div>
    </section>
  )
}

function GaleriaCard({ img, index }) {
  // Placeholder con gradiente si no hay imagen todavía
  const placeholderColors = [
    "from-accent/20 to-accent/5",
    "from-blue-500/20 to-blue-500/5",
    "from-purple-500/20 to-purple-500/5",
    "from-orange-500/20 to-orange-500/5",
  ]

  return (
    <div className="group relative aspect-video rounded-xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10">
      {img.src ? (
        // ✏️ Cuando agregues imágenes reales, estas se muestran automáticamente
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover"
        />
      ) : (
        // Placeholder visual mientras no hay screenshots
        <div
          className={`w-full h-full bg-gradient-to-br ${placeholderColors[index % 4]} flex flex-col items-center justify-center gap-2`}
        >
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          {/* ✏️ MODIFICAR en siteConfig.js → GALERIA.images[].label */}
          <span className="text-white/30 text-xs font-body">{img.label}</span>
        </div>
      )}

      {/* Overlay label */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-white text-xs font-body font-medium">{img.label}</p>
      </div>
    </div>
  )
}
