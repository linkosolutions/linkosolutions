import { SITE } from "../data/siteConfig"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink noise-bg"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#00C896 1px, transparent 1px), linear-gradient(90deg, #00C896 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-body font-medium px-3 py-1.5 rounded-full mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {/* ✏️ MODIFICAR: badge del hero */}
            Software para comercios · Argentina
          </div>

          {/* Headline */}
          {/* ✏️ MODIFICAR: título principal */}
          <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6 animate-fade-up delay-100">
            Software para comercios que quieren{" "}
            <span className="text-accent">trabajar ordenados</span>
          </h1>

          {/* Subtext */}
          {/* ✏️ MODIFICAR: subtítulo */}
          <p className="font-body text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mb-10 animate-fade-up delay-200">
            En LinkoSolutions desarrollamos sistemas simples, rápidos y hechos
            para el día a día del comerciante. Dejá el papel y empezá a
            trabajar con orden.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-dark text-ink font-body font-semibold text-base px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
              {/* ✏️ MODIFICAR: texto del botón principal */}
              Solicitar demo por WhatsApp
            </a>
            <button
              onClick={() =>
                document.querySelector("#sistemas")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-body font-medium text-base px-6 py-3.5 rounded-full transition-all duration-200"
            >
              Ver sistemas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Social proof mini */}
          <div className="mt-14 flex items-center gap-6 animate-fade-up delay-400">
            <div className="flex items-center gap-2 text-white/30 text-xs font-body">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {/* ✏️ MODIFICAR: puntos de confianza */}
              Soporte directo
            </div>
            <div className="flex items-center gap-2 text-white/30 text-xs font-body">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Instalación incluida
            </div>
            <div className="flex items-center gap-2 text-white/30 text-xs font-body">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Hecho en Argentina
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-30">
        <div className="w-px h-8 bg-white" />
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
