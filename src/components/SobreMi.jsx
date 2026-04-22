import { SOBRE_MI, SITE } from "../data/siteConfig"
import SectionHeader from "./SectionHeader"

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-slate-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left — Avatar placeholder + stats */}
          <div className="flex flex-col items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/src/assets/icono.ico"
                  alt="LinkoSolutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {/* ✏️ MODIFICAR en siteConfig.js → SOBRE_MI.stats */}
              {SOBRE_MI.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-mid rounded-xl p-4 text-center"
                >
                  <p className="font-display font-bold text-xl text-ink">{stat.valor}</p>
                  <p className="font-body text-xs text-ink/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — texto */}
          <div>
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-accent mb-4">
              Sobre nosotros
            </span>

            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink leading-tight mb-6">
                Quiénes <span className="text-accent">somos</span>
            </h2>

            {/* ✏️ MODIFICAR en siteConfig.js → SOBRE_MI.texto */}
            <p className="font-body text-lg text-ink/60 leading-relaxed mb-8">
              {SOBRE_MI.texto}
            </p>

            {/* Valores */}
            <div className="space-y-4">
              {[
                {
                  icon: "🤝",
                  titulo: "Trato directo",
                  desc: "Sin intermediarios. Hablás siempre con nosotros.",
                },
                {
                  icon: "⚡",
                  titulo: "Rápido y simple",
                  desc: "Sistemas que funcionan desde el primer día.",
                },
                {
                  icon: "🛠",
                  titulo: "Soporte continuo",
                  desc: "Estamos disponibles para resolver cualquier duda.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    {/* ✏️ MODIFICAR: valores/propuestas */}
                    <p className="font-body font-semibold text-ink text-sm">{item.titulo}</p>
                    <p className="font-body text-ink/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola Matías! Quiero saber más sobre tus sistemas.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-ink text-white font-body font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-accent hover:text-ink transition-all duration-200"
            >
              Contactanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
