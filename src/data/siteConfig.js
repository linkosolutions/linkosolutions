// ============================================================
// ✏️ ARCHIVO DE CONFIGURACIÓN CENTRAL — MODIFICÁ DESDE ACÁ
// ============================================================

import ventas from '../assets/ventas.png'
import caja from '../assets/caja.png'
import stock from '../assets/stock.png'
import empleados from '../assets/empleados.png'
import analisis from '../assets/analisis.png'
import reportes from '../assets/reportes.png'
import productos from '../assets/productos.png'
import compras from '../assets/compras.png'
import gastos from '../assets/gastos.png'
import deudas from '../assets/deudas.png'
import ordenescompra from '../assets/ordenescompra.png'
import usuarios from '../assets/usuarios.png'
import configuracion from '../assets/configuracion.png'

export const SITE = {
  name: "LinkoSolutions",
  tagline: "Software para comercios",
  // ✏️ Número de WhatsApp (formato internacional, sin +, sin espacios)
  whatsapp: "5491157038075",
  whatsappMessage: "Hola! Quiero saber más sobre tus sistemas.",
  // ✏️ Email de contacto
  email: "linkosolutionss@gmail.com",
  // ✏️ Redes sociales (dejá vacío "" si no tenés)
  instagram: "https://instagram.com/linkosolutionss",
  linkedin: "",
}

export const EMAILJS = {
  serviceId: "service_h7u7cps",
  templateId: "template_2gfgxf5",
  publicKey: "6_4wX0fWKgSui7Ysj",
}

export const NAV_LINKS = [
  { label: "Inicio",         href: "#inicio" },
  { label: "Sistemas",       href: "#sistemas" },
  { label: "Sobre nosotros", href: "#sobre-mi" },
  { label: "Contacto",       href: "#contacto" },
]

export const SISTEMAS = [
  {
    id: 1,
    name: "ComerciOS",
    badge: "Disponible ahora",
    badgeColor: "accent",
    description:
      "Sistema pensado para comercios reales. Permite vender rápido, controlar stock, ver ganancias y trabajar de forma ordenada sin complicaciones.",
    features: [
      "Gestión de ventas y caja",
      "Control de stock e inventario",
      "Seguimiento de ganancias",
      "Gestión de empleados y sueldos",
      "Informes y estadísticas",
      "Fácil de usar, sin capacitación",
    ],
    // ✏️ Fotos del carrusel
    screenshots: [
      { src: ventas,        label: "Ventas" },
      { src: caja,          label: "Caja" },
      { src: stock,         label: "Stock" },
      { src: productos,     label: "Productos" },
      { src: empleados,     label: "Empleados" },
      { src: analisis,      label: "Análisis" },
      { src: reportes,      label: "Reportes" },
      { src: compras,       label: "Compras" },
      { src: gastos,        label: "Gastos" },
      { src: deudas,        label: "Deudas" },
      { src: ordenescompra, label: "Órdenes de compra" },
      { src: usuarios,      label: "Usuarios" },
      { src: configuracion, label: "Configuración" },
    ],
    price: null,
    ctaLabel: "Solicitar demo",
    ctaHref: null,
  },
  // ➕ Para agregar otro sistema, copiá el objeto de arriba y pegalo acá
]

export const SOBRE_MI = {
  nombre: "Linko",
  texto:
    "En LinkoSolutions desarrollamos software pensado para el comerciante real. Nos especializamos en sistemas simples, rápidos y confiables que se adaptan a cada negocio. Trabajamos de forma cercana con cada cliente, acompañándolos desde la instalación hasta el soporte del día a día.",
  stats: [
    { valor: "100%", label: "Soporte local" },
    { valor: "ARG",  label: "Hecho en Argentina" },
    { valor: "24h",  label: "Respuesta rápida" },
  ],
  
}

export const GALERIA = {
  title: "El sistema en acción",
  subtitle: "Capturas reales de ComerciOS",
  images: [],
}