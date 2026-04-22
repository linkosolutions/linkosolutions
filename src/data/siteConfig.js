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
  // ✏️ Número de WhatsApp
  whatsapp: "5491157038075",
  whatsappMessage: "Hola! Me interesa una demo de ComerciOS.",
  email: "linkosolutionss@gmail.com",
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
    slug: "comercios",           // → URL: /comercios
    badge: "Disponible ahora",
    description:
      "Sistema pensado para comercios reales. Permite vender rápido, controlar stock, ver ganancias y trabajar de forma ordenada sin complicaciones.",
    features: [
      "Gestión de ventas y caja",
      "Control de stock e inventario",
      "Seguimiento de ganancias",
      "Gestión de empleados y sueldos",
      "Informes y estadísticas",
      "Fácil de usar, con manual de capacitación",
    ],
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
    // ✏️ Planes de precios
    planes: [
      {
        id: "base",
        nombre: "ComerciOS Base",
        // ✏️ MODIFICAR: precio
        precio: "$70.000",
        precioDetalle: "pago único",
        descripcion: "Todo lo que necesitás para empezar a trabajar ordenado desde el primer día.",
        // ✏️ MODIFICAR: link de MercadoPago
        mpLink: "https://mpago.la/TU_LINK_AQUI",
        destacado: false,
        features: [
          "Sistema completo de ventas",
          "Control de stock e inventario",
          "Caja y cierre diario",
          "Gestión de productos",
          "Registro de empleados",
          "Informes y estadísticas",
          "Soporte incluido",
          "Instalación incluida",
          "Actualizaciones incluidas",
        ],
        noIncluye: [
          "Lector de códigos de barras",
        ],
      },
    ],
    // ✏️ Adicionales
    adicionales: [
      {
        nombre: "Lector de códigos de barras",
        precio: "$30.000",
        descripcion: "Agregá un lector de códigos compatible con ComerciOS para agilizar tus ventas y el control de stock.",
        // ✏️ MODIFICAR: link de MercadoPago para el adicional
        mpLink: "https://mpago.la/TU_LINK_LECTOR",
        icono: "🔍",
      },
    ],
    // ✏️ Medios de pago aceptados
    mediosPago: [
      { nombre: "MercadoPago",     icono: "💳" },
      { nombre: "Transferencia",   icono: "🏦" },
      { nombre: "Efectivo",        icono: "💵" },
      { nombre: "Tarjeta débito",  icono: "💳" },
      { nombre: "Tarjeta crédito", icono: "💳" },
    ],
    // ✏️ Requisitos técnicos
    requisitos: [
      { label: "Sistema operativo", valor: "Windows 10 / 11" },
      { label: "RAM mínima",        valor: "4 GB" },
      { label: "Almacenamiento",    valor: "500 MB libres" },
      { label: "Conexión",          valor: "No requiere internet" },
      { label: "Instalación",       valor: "A cargo nuestro" },
    ],
    // ✏️ Preguntas frecuentes
    faq: [
      {
        pregunta: "¿Necesito internet para usar ComerciOS?",
        respuesta: "No. ComerciOS funciona 100% offline. No necesitás internet para vender ni para controlar tu stock.",
      },
      {
        pregunta: "¿En cuántos equipos puedo instalarlo?",
        respuesta: "La licencia base es para una PC. Si necesitás más equipos o sucursales, consultanos por el plan multi-sucursal.",
      },
      {
        pregunta: "¿Cómo es la instalación?",
        respuesta: "Nosotros nos encargamos de instalar y configurar el sistema en tu PC. También te explicamos cómo usarlo.",
      },
      {
        pregunta: "¿Qué pasa si tengo un problema?",
        respuesta: "Tenés soporte directo por WhatsApp. Respondemos rápido y resolvemos cualquier inconveniente.",
      },
      {
        pregunta: "¿El lector de códigos es obligatorio?",
        respuesta: "No, es opcional. Podés cargar productos manualmente. El lector es un adicional para agilizar las operaciones.",
      },
    ],
    ctaLabel: "Ver más info",
    ctaHref: "/comercios",
  },
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
