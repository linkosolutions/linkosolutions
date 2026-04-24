// ============================================================
// ✏️ ARCHIVO DE CONFIGURACIÓN CENTRAL — MODIFICÁ DESDE ACÁ
// ============================================================

// ── ComerciOS screenshots ──
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

// ── TechPro screenshots ──
import tp_dashboard     from '../assets/techpro/dashboard.png'
import tp_equipos       from '../assets/techpro/equipos.png'
import tp_imei          from '../assets/techpro/imei.png'
import tp_ventas        from '../assets/techpro/ventas.png'
import tp_productos     from '../assets/techpro/productos.png'
import tp_reparaciones  from '../assets/techpro/reparaciones.png'
import tp_citas         from '../assets/techpro/citas.png'
import tp_clientes      from '../assets/techpro/clientes.png'
import tp_proveedores   from '../assets/techpro/proveedores.png'
import tp_reportes      from '../assets/techpro/reportes.png'
import tp_reportes2     from '../assets/techpro/reportes2.png'
import tp_reportes3     from '../assets/techpro/reportes3.png'
import tp_reportes4     from '../assets/techpro/reportes4.png'
import tp_configuracion from '../assets/techpro/configuracion.png'

export const SITE = {
  name: "LinkoSolutions",
  tagline: "Software para comercios",
  // ✏️ Número de WhatsApp
  whatsapp: "5491112345678",
  whatsappMessage: "Hola! Me interesa una demo de ComerciOS.",
  email: "contacto@linkosolutions.com",
  instagram: "https://instagram.com/linkosolutions",
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
  // ── ComerciOS ──────────────────────────────────────────────
  {
    id: 1,
    name: "ComerciOS",
    slug: "comercios",
    badge: "Disponible ahora",
    tagline: "Para kioscos, almacenes y comercios generales",
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
    planes: [
      {
        id: "base",
        nombre: "ComerciOS Base",
        precio: "$70.000",
        precioDetalle: "pago único",
        descripcion: "Todo lo que necesitás para empezar a trabajar ordenado desde el primer día.",
        mpLink: "https://mpago.la/TU_LINK_AQUI",
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
        noIncluye: ["Lector de códigos de barras"],
      },
    ],
    adicionales: [
      {
        nombre: "Lector de códigos de barras",
        precio: "$30.000",
        descripcion: "Agregá un lector de códigos compatible con ComerciOS para agilizar tus ventas y el control de stock.",
        mpLink: "https://mpago.la/TU_LINK_LECTOR",
        icono: "🔍",
      },
    ],
    mediosPago: [
      { nombre: "MercadoPago",     icono: "💳" },
      { nombre: "Transferencia",   icono: "🏦" },
      { nombre: "Efectivo",        icono: "💵" },
      { nombre: "Tarjeta débito",  icono: "💳" },
      { nombre: "Tarjeta crédito", icono: "💳" },
    ],
    requisitos: [
      { label: "Sistema operativo", valor: "Windows 10 / 11" },
      { label: "RAM mínima",        valor: "4 GB" },
      { label: "Almacenamiento",    valor: "500 MB libres" },
      { label: "Conexión",          valor: "No requiere internet" },
      { label: "Instalación",       valor: "A cargo nuestro" },
    ],
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

  // ── TechPro ────────────────────────────────────────────────
  {
    id: 2,
    name: "TechPro",
    slug: "techpro",
    badge: "Disponible ahora",
    tagline: "Para locales de celulares y tecnología",
    description:
      "Sistema completo para locales de tecnología. Gestioná equipos por IMEI, reparaciones, ventas en ARS y USD, citas, clientes y más — todo en un solo lugar.",
    features: [
      "Gestión de equipos por IMEI",
      "Ventas en ARS y USD",
      "Módulo de reparaciones",
      "Agenda de citas",
      "Clientes y proveedores",
      "Reportes avanzados",
      "Multi-usuario con roles",
      "Multi-local (multi-tenant)",
    ],
    screenshots: [
      { src: tp_dashboard,     label: "Dashboard" },
      { src: tp_equipos,       label: "Equipos" },
      { src: tp_imei,          label: "Historial IMEI" },
      { src: tp_ventas,        label: "Ventas" },
      { src: tp_productos,     label: "Productos" },
      { src: tp_reparaciones,  label: "Reparaciones" },
      { src: tp_citas,         label: "Citas" },
      { src: tp_clientes,      label: "Clientes" },
      { src: tp_proveedores,   label: "Proveedores" },
      { src: tp_reportes,      label: "Reportes" },
      { src: tp_reportes2,     label: "Reportes 2" },
      { src: tp_reportes3,     label: "Reportes 3" },
      { src: tp_reportes4,     label: "Reportes 4" },
      { src: tp_configuracion, label: "Configuración" },
    ],
    planes: [
      {
        id: "prueba",
        nombre: "Prueba gratuita",
        precio: "Gratis",
        precioDetalle: "7 días",
        descripcion: "Probá TechPro con acceso Pro completo durante 7 días, sin tarjeta requerida.",
        features: [
          "Acceso completo por 7 días",
          "Todos los módulos habilitados",
          "Reportes Pro incluidos",
          "Sin tarjeta de crédito",
        ],
        noIncluye: [],
      },
      {
        id: "basico",
        nombre: "Básico",
        precio: "$15.000",
        precioDetalle: "por mes",
        descripcion: "Ideal para locales pequeños que quieren empezar a trabajar ordenados.",
        features: [
          "2 usuarios",
          "50 equipos en stock",
          "Ventas en ARS y USD",
          "Módulo de reparaciones",
          "Agenda de citas",
          "Clientes y proveedores",
          "Reportes básicos",
          "Soporte por WhatsApp",
        ],
        noIncluye: ["Reportes avanzados Pro", "Más de 2 usuarios"],
      },
      {
        id: "pro",
        nombre: "Pro",
        precio: "$25.000",
        precioDetalle: "por mes",
        descripcion: "Para locales que crecen y necesitan más control, usuarios y reportes detallados.",
        features: [
          "10 usuarios",
          "Equipos ilimitados",
          "Ventas en ARS y USD",
          "Módulo de reparaciones",
          "Agenda de citas",
          "Clientes y proveedores",
          "Reportes básicos y avanzados",
          "Ranking de clientes",
          "Equipos parados +60 días",
          "Ventas por vendedor",
          "Soporte prioritario",
        ],
        noIncluye: [],
        destacado: true,
      },
    ],
    mediosPago: [
      { nombre: "MercadoPago",     icono: "💳" },
      { nombre: "Transferencia",   icono: "🏦" },
      { nombre: "Efectivo",        icono: "💵" },
      { nombre: "Tarjeta débito",  icono: "💳" },
      { nombre: "Tarjeta crédito", icono: "💳" },
    ],
    requisitos: [
      { label: "Dispositivo",  valor: "PC, tablet o celular" },
      { label: "Sistema",      valor: "Cualquier navegador moderno" },
      { label: "Conexión",     valor: "Requiere internet" },
      { label: "Instalación",  valor: "No requiere instalar nada" },
      { label: "Acceso",       valor: "Desde cualquier lugar" },
    ],
    faq: [
      {
        pregunta: "¿Puedo probar TechPro antes de pagar?",
        respuesta: "Sí. Tenés 7 días de prueba gratuita con acceso Pro completo, sin necesidad de tarjeta.",
      },
      {
        pregunta: "¿Qué pasa cuando vence mi licencia?",
        respuesta: "El sistema entra en modo solo lectura. No perdés ningún dato, pero no podés registrar nuevas operaciones hasta renovar.",
      },
      {
        pregunta: "¿Puedo tener varios locales?",
        respuesta: "Sí. TechPro es multi-tenant: cada local tiene sus propios datos aislados con su propio acceso.",
      },
      {
        pregunta: "¿Puedo vender en dólares?",
        respuesta: "Sí. TechPro maneja precios en ARS y USD con conversión automática al tipo de cambio que configurés.",
      },
      {
        pregunta: "¿Cómo gestiono las reparaciones?",
        respuesta: "Podés crear órdenes de reparación, asignar técnico, registrar estados y hacer seguimiento completo por cliente.",
      },
      {
        pregunta: "¿Qué diferencia hay entre Básico y Pro?",
        respuesta: "El plan Básico tiene 2 usuarios y 50 equipos con reportes básicos. El plan Pro tiene 10 usuarios, equipos ilimitados y reportes avanzados con análisis de márgenes, vendedores y clientes.",
      },
    ],
    ctaLabel: "Ver más info",
    ctaHref: "/techpro",
  },
]

export const SOBRE_MI = {
  nombre: "Linko",
  texto:
    "En LinkoSolutions desarrollamos software pensado para el comerciante real. Nos especializamos en sistemas simples, rápidos y confiables que se adaptan a cada negocio. Trabajamos de forma cercana con cada cliente, acompañándolos desde la instalación hasta el soporte del día a día.",
  stats: [
    { valor: "2",    label: "Sistemas activos" },
    { valor: "ARG",  label: "Hecho en Argentina" },
    { valor: "24h",  label: "Respuesta rápida" },
  ],
}
