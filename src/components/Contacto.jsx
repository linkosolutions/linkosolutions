import { useState } from "react"
import { EMAILJS, SITE } from "../data/siteConfig"
import SectionHeader from "./SectionHeader"

const RUBROS = [
  // ✏️ MODIFICAR: opciones de rubro del formulario
  "Kiosco",
  "Almacén / Despensa",
  "Ferretería",
  "Verdulería / Frutería",
  "Panadería",
  "Ropa / Indumentaria",
  "Perfumería / Cosmética",
  "Otro",
]

export default function Contacto() {
  const [form, setForm] = useState({
    comercio: "",
    whatsapp: "",
    rubro: "",
    mensaje: "",
  })
  const [status, setStatus] = useState("idle") // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // EmailJS — asegurate de configurar las claves en siteConfig.js
      const { default: emailjs } = await import("@emailjs/browser")
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          comercio: form.comercio,
          whatsapp: form.whatsapp,
          rubro: form.rubro,
          mensaje: form.mensaje,
        },
        EMAILJS.publicKey
      )
      setStatus("success")
      setForm({ comercio: "", whatsapp: "", rubro: "", mensaje: "" })
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-ink noise-bg">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Contacto"
          title="¿Querés más info?"
          subtitle="Completá el formulario y te respondo a la brevedad."
          dark
        />

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
            {status === "success" ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre del comercio */}
                <FormField
                  label="Nombre del comercio"
                  name="comercio"
                  type="text"
                  placeholder="Ej: Kiosco El Sol"
                  value={form.comercio}
                  onChange={handleChange}
                  required
                />

                {/* WhatsApp */}
                <FormField
                  label="Tu WhatsApp"
                  name="whatsapp"
                  type="tel"
                  placeholder="Ej: 11 1234-5678"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                />

                {/* Rubro */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-sm font-body font-medium">
                    Rubro del comercio
                  </label>
                  <select
                    name="rubro"
                    value={form.rubro}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="" className="bg-ink">Seleccioná un rubro</option>
                    {RUBROS.map((r) => (
                      <option key={r} value={r} className="bg-ink">
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-sm font-body font-medium">
                    Mensaje <span className="text-white/30">(opcional)</span>
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Contame un poco sobre tu comercio o qué necesitás..."
                    className="bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-accent text-ink font-body font-bold text-sm py-4 rounded-xl hover:bg-accent-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Enviando..." : "Enviar consulta"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm font-body text-center">
                    Hubo un error. Podés escribirnos directamente por{" "}
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                    .
                  </p>
                )}

                <p className="text-white/20 text-xs font-body text-center">
                  También podés escribirnos a{" "}
                  {/* ✏️ MODIFICAR en siteConfig.js → SITE.email */}
                  <a href={`mailto:${SITE.email}`} className="underline text-white/30">
                    {SITE.email}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/60 text-sm font-body font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  )
}

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center text-center py-8 gap-4">
      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="font-display font-bold text-xl text-white">¡Mensaje enviado!</h3>
      <p className="font-body text-white/50 text-sm">
        Te respondo a la brevedad. También podés escribirme directo por WhatsApp.
      </p>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent text-ink font-body font-semibold text-sm px-5 py-3 rounded-full"
      >
        Ir a WhatsApp
      </a>
    </div>
  )
}
