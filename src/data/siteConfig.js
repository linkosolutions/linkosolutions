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

export const SITE = {
  name: "LinkoSolutions",
  tagline: "Software para comercios",
  whatsapp: "5491157038075",
  // Link directo al instalador de ComerciOS (ej. una Release de GitHub). Vacío = se oculta el botón "Descargar".
  descargaComerciOS: "",
  whatsappMessage: "Hola! Me interesa conocer más sobre sus sistemas.",
  email: "linkosolutionss@gmail.com",
  instagram: "https://instagram.com/linkosolutionss",
  linkedin: "",
  // Muestra una tarjeta "Próximamente" junto a los sistemas. Dejala en false hasta que haya un sistema nuevo.
  mostrarProximamente: false,
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
      "Ventas, stock, caja y facturación electrónica en un solo programa. Cobrá con QR de Mercado Pago, trabajá con varias cajas y mantené tus datos respaldados — simple, rápido y hecho para el comerciante real.",
    features: [
      "Ventas rápidas con lector de código de barras",
      "Facturación electrónica ARCA (A, B y C)",
      "Cobro con QR de Mercado Pago",
      "Stock con alertas e importación desde Excel",
      "Varias cajas en la misma red del local",
      "Backup en la nube cifrado",
      "Caja, deudas, compras, empleados y reportes",
      "Se actualiza solo",
    ],
    destacados: [
      { icono: "🧾", titulo: "Facturación electrónica ARCA", texto: "Factura A, B o C con CAE y código QR desde la misma pantalla de cobro. Si anulás una venta, se emite la nota de crédito automáticamente." },
      { icono: "📱", titulo: "Cobro con QR de Mercado Pago", texto: "El cliente escanea y paga; la venta se registra sola. El dinero entra directo a tu cuenta de Mercado Pago." },
      { icono: "🖧", titulo: "Varias cajas, un solo sistema", texto: "Sumá computadoras que vendan al mismo tiempo compartiendo productos, stock y reportes. Cada caja tiene su propio cierre." },
      { icono: "📦", titulo: "Stock con alertas", texto: "Historial de movimientos y aviso cuando algo se está por terminar. Cargá todo tu catálogo desde Excel en minutos." },
      { icono: "☁️", titulo: "Backup en la nube cifrado", texto: "Copias automáticas con una clave que sabés solo vos. Si se rompe la compu, recuperás todo." },
      { icono: "🔄", titulo: "Siempre actualizado", texto: "El programa se actualiza solo y tus datos quedan en tu computadora. Funciona para vender aunque no haya internet." },
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
        id: "prueba",
        nombre: "Prueba gratuita",
        precios: {
          ARS: { mensual: { monto: "Gratis", detalle: "5 días" }, anual: { monto: "Gratis", detalle: "5 días" } },
          USD: { mensual: { monto: "Free",   detalle: "5 days" }, anual: { monto: "Free",   detalle: "5 days" } },
        },
        descripcion: "Probá ComerciOS con todas las funciones durante 5 días, sin tarjeta.",
        features: [
          "Acceso completo por 5 días",
          "Todas las funciones habilitadas",
          "Sin tarjeta de crédito",
          "Si te gusta, seguís con tus datos ya cargados",
        ],
        noIncluye: [],
      },
      {
        id: "licencia",
        nombre: "ComerciOS",
        destacado: true,
        precios: {
          ARS: { mensual: { monto: "$7.000", detalle: "por mes" }, anual: { monto: "$71.400", detalle: "por año", porMes: "$5.950/mes" } },
          USD: { mensual: { monto: "USD 5",  detalle: "per month" }, anual: { monto: "USD 51", detalle: "per year", porMes: "USD 4.25/mo" } },
        },
        descripcion: "Todo lo que necesitás para trabajar ordenado desde el primer día. Pagás directo desde el programa con Mercado Pago.",
        features: [
          "Ventas, caja y cierre diario",
          "Control de stock e inventario",
          "Facturación electrónica ARCA",
          "Cobro con QR de Mercado Pago",
          "Importar productos desde Excel",
          "Clientes con fiado y proveedores",
          "Compras, gastos y empleados",
          "Informes y estadísticas",
          "Usuarios con roles (administrador y cajero)",
          "Actualizaciones y soporte por WhatsApp",
        ],
        noIncluye: ["Lector de códigos de barras (se compra aparte)"],
      },
    ],
    adicionales: [
      {
        nombre: "Caja adicional",
        precios: {
          ARS: { monto: "$5.000", detalle: "por mes, por caja" },
          USD: { monto: "USD 4",  detalle: "per month, per register" },
        },
        descripcion: "Sumá otra computadora en tu local que venda al mismo tiempo, compartiendo productos, stock y reportes.",
        icono: "🖧",
      },
      {
        nombre: "Backup en la nube",
        precios: {
          ARS: { monto: "$2.500", detalle: "por mes" },
          USD: { monto: "USD 2",  detalle: "per month" },
        },
        descripcion: "Copias automáticas cifradas fuera de tu computadora. Solo vos tenés la clave: ni nosotros podemos leerlas.",
        icono: "☁️",
      },
      {
        nombre: "Lector de códigos de barras",
        precios: {
          ARS: { monto: "$30.000", detalle: "pago único" },
          USD: { monto: "USD 20",  detalle: "one-time" },
        },
        descripcion: "Agregá un lector de códigos compatible con ComerciOS para agilizar tus ventas y el control de stock.",
        mpLink: "https://mpago.la/TU_LINK_LECTOR",
        icono: "🔍",
      },
    ],
    mediosPago: [
      { nombre: "MercadoPago",     icono: "💳" },
      { nombre: "Transferencia",   icono: "🏦" },
      { nombre: "Tarjeta débito",  icono: "💳" },
      { nombre: "Tarjeta crédito", icono: "💳" },
    ],
    requisitos: [
      { label: "Sistema operativo", valor: "Windows 10 / 11" },
      { label: "RAM mínima",        valor: "4 GB" },
      { label: "Almacenamiento",    valor: "500 MB libres" },
      { label: "Internet",          valor: "Para vender no hace falta" },
      { label: "Con internet",      valor: "Activar, facturar, QR, backup y actualizar" },
      { label: "Facturación",       valor: "CUIT, clave fiscal y certificado (te guiamos)" },
      { label: "Instalación",       valor: "Instalador simple · te ayudamos si querés" },
    ],
    faq: [
      { pregunta: "¿Puedo probarlo antes de pagar?", respuesta: "Sí. Tenés 5 días de prueba gratuita con todas las funciones, sin tarjeta. Si te gusta, seguís con los datos que ya cargaste." },
      { pregunta: "¿Necesito internet para usar ComerciOS?", respuesta: "Para vender, controlar el stock y manejar la caja no. Se necesita internet para activar la licencia, facturar con ARCA, cobrar con QR, hacer el backup en la nube y recibir actualizaciones." },
      { pregunta: "¿Cómo se paga?", respuesta: "Desde el mismo programa, con Mercado Pago, mensual o anual (el anual tiene 15% de descuento). Se activa solo cuando se acredita el pago. Si preferís, lo coordinamos por WhatsApp." },
      { pregunta: "¿Qué pasa si dejo de pagar?", respuesta: "La licencia vence y tenés unos días de gracia. Tus datos siguen en tu computadora; cuando renovás, seguís donde quedaste." },
      { pregunta: "¿Cómo facturo con ARCA?", respuesta: "Necesitás tu CUIT, clave fiscal y un certificado digital. El programa te guía paso a paso y genera la solicitud del certificado por vos. Sirve para Monotributo (Factura C) y Responsable Inscripto (Facturas A y B)." },
      { pregunta: "Tengo más de una caja, ¿puedo usarlo en todas?", respuesta: "Sí. Una computadora es la principal y las demás se conectan por la red del local, comparten productos, stock y reportes, y venden al mismo tiempo. Cada caja adicional cuesta $5.000 por mes." },
      { pregunta: "¿Dónde quedan mis datos?", respuesta: "En tu propia computadora, con una copia automática diaria. Si contratás el backup en la nube, las copias se cifran en tu PC con una clave que solo vos conocés." },
      { pregunta: "¿Puedo cargar mis productos de una vez?", respuesta: "Sí. Descargás una plantilla de Excel (o usás tu propia lista de precios) y los importás en minutos, con vista previa antes de confirmar." },
      { pregunta: "¿El lector de códigos es obligatorio?", respuesta: "No, es opcional. Podés cargar productos manualmente. El lector es un adicional para agilizar las operaciones." },
      { pregunta: "¿Qué pasa si tengo un problema?", respuesta: "Tenés soporte directo por WhatsApp. El programa además genera un archivo de diagnóstico para que podamos resolverlo rápido, sin incluir tus ventas ni tus datos." },
    ],
    ctaLabel: "Ver más info",
    ctaHref: "/comercios",
  },
]

export const SOBRE_MI = {
  nombre: "Linko",
  texto: "En LinkoSolutions desarrollamos software pensado para el comerciante real. Nos especializamos en sistemas simples, rápidos y confiables que se adaptan a cada negocio. Trabajamos de forma cercana con cada cliente, acompañándolos desde la instalación hasta el soporte del día a día.",
  stats: [
    { valor: "1",    label: "Sistema activo" },
    { valor: "ARG",  label: "Hecho en Argentina" },
    { valor: "24h",  label: "Respuesta rápida" },
  ],
}
