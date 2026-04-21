// Componente reutilizable para encabezados de sección
export default function SectionHeader({ tag, title, subtitle, dark = false }) {
  return (
    <div className="text-center mb-16">
      {tag && (
        <span
          className={`inline-block text-xs font-body font-semibold uppercase tracking-widest mb-4 ${
            dark ? "text-accent" : "text-accent"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-lg max-w-2xl mx-auto leading-relaxed ${
            dark ? "text-white/50" : "text-ink/50"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
