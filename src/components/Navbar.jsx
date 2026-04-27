import { useState, useEffect } from "react"
import { NAV_LINKS, SITE } from "../data/siteConfig"
import { useCurrency } from "../context/CurrencyContext"

const CURRENCIES = ["ARS", "USD"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { currency, setCurrency } = useCurrency()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-slate-light/90 backdrop-blur-md shadow-sm border-b border-slate-mid"
        : "bg-ink/60 backdrop-blur-md"
    }`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => handleNav("#inicio")}
          className={`font-display font-bold text-xl tracking-tight ${scrolled ? "text-ink" : "text-white"}`}>
          Linko<span className="text-accent">Solutions</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button onClick={() => handleNav(link.href)}
                className={`font-body text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  scrolled ? "text-ink/60 hover:text-ink" : "text-white/70 hover:text-white"
                }`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: currency + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* ── Selector de moneda ── */}
          <CurrencySelector currency={currency} setCurrency={setCurrency} scrolled={scrolled} />

          {/* CTA */}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-ink font-body font-semibold text-sm px-4 py-2 rounded-full hover:bg-accent-dark transition-colors duration-200">
            <WhatsAppIcon />
            Demo gratis
          </a>
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <CurrencySelector currency={currency} setCurrency={setCurrency} scrolled={scrolled} />
          <button className="p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            <div className={`w-5 h-px transition-all duration-300 ${scrolled ? "bg-ink" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
            <div className={`w-5 h-px mt-1.5 transition-all duration-300 ${scrolled ? "bg-ink" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-px mt-1.5 transition-all duration-300 ${scrolled ? "bg-ink" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-slate-light border-b border-slate-mid ${
        menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <ul className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button onClick={() => handleNav(link.href)}
                className="font-body text-sm font-medium text-ink/70 hover:text-accent transition-colors">
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-ink font-semibold text-sm px-4 py-2 rounded-full">
              <WhatsAppIcon />
              Demo gratis
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

// ── Selector de moneda ──
function CurrencySelector({ currency, setCurrency, scrolled }) {
  const [open, setOpen] = useState(false)

  const flags = { ARS: "🇦🇷", USD: "🇺🇸" }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-sm font-body font-medium px-3 py-1.5 rounded-full border transition-all duration-200 ${
          scrolled
            ? "border-slate-mid text-ink/70 hover:border-accent/40 hover:text-ink bg-white"
            : "border-white/20 text-white/70 hover:border-white/40 hover:text-white bg-white/10"
        }`}
      >
        <span>{flags[currency]}</span>
        <span>{currency}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-slate-mid rounded-xl shadow-lg overflow-hidden z-50 min-w-[100px]">
          {CURRENCIES.map((c) => (
            <button
              key={c}
              onClick={() => { setCurrency(c); setOpen(false) }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-body transition-colors hover:bg-slate-light ${
                currency === c ? "text-accent font-semibold bg-accent/5" : "text-ink/70"
              }`}
            >
              <span>{flags[c]}</span>
              <span>{c}</span>
              {currency === c && (
                <svg className="w-3 h-3 text-accent ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
