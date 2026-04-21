# LinkoSolutions — Sitio Web

## 🚀 Instalación y primer uso

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

## 📦 Build para producción

```bash
npm run build
# Genera la carpeta /dist lista para subir a hosting
```

---

## ✏️ Guía de modificaciones

### Todo el contenido editable está en UN solo archivo:
```
src/data/siteConfig.js
```

### Qué podés cambiar ahí:

| Variable | Qué modifica |
|----------|-------------|
| `SITE.name` | Nombre de la empresa |
| `SITE.whatsapp` | Número de WhatsApp (sin + ni espacios) |
| `SITE.whatsappMessage` | Mensaje default del botón de demo |
| `SITE.email` | Email de contacto |
| `SITE.instagram` | Link de Instagram |
| `EMAILJS.*` | Claves de EmailJS para el formulario |
| `NAV_LINKS` | Links del navbar |
| `SISTEMAS[]` | Agregar/editar sistemas (cards) |
| `GALERIA.images[]` | Agregar capturas de pantalla |
| `SOBRE_MI.texto` | Texto de la sección "Sobre mí" |
| `SOBRE_MI.stats` | Estadísticas de la sección |

---

## 📸 Agregar capturas de pantalla (Galería)

1. Copiá tus imágenes a `src/assets/`
2. En `src/data/siteConfig.js`, importalas:
   ```js
   import screen1 from '../assets/dashboard.png'
   import screen2 from '../assets/ventas.png'
   ```
3. Asignalas en `GALERIA.images`:
   ```js
   { src: screen1, alt: "Dashboard", label: "Dashboard" },
   ```

---

## 📧 Configurar EmailJS (formulario de contacto)

1. Creá cuenta en https://www.emailjs.com/
2. Creá un servicio (Gmail, Outlook, etc.)
3. Creá un template con estas variables:
   - `{{comercio}}`
   - `{{whatsapp}}`
   - `{{rubro}}`
   - `{{mensaje}}`
4. Copiá los IDs en `src/data/siteConfig.js`:
   ```js
   export const EMAILJS = {
     serviceId: "service_xxxxxxx",
     templateId: "template_xxxxxxx",
     publicKey: "xxxxxxxxxxxxxxxx",
   }
   ```

---

## ➕ Agregar un nuevo sistema

En `src/data/siteConfig.js`, copiá y pegá un nuevo objeto en el array `SISTEMAS`:

```js
{
  id: 2,
  name: "NuevoSistema",
  badge: "Próximamente",
  badgeColor: "accent",
  description: "Descripción del sistema...",
  features: ["Feature 1", "Feature 2"],
  price: null,
  ctaLabel: "Solicitar demo",
  ctaHref: null,
}
```

La grid se ajusta automáticamente (1 → 2 → 3 columnas).

---

## 🗂️ Estructura del proyecto

```
src/
├── App.jsx                    # Componente raíz
├── main.jsx                   # Entry point
├── index.css                  # Estilos globales + Tailwind
├── data/
│   └── siteConfig.js          # ✏️ TODO el contenido editable
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Sistemas.jsx
    ├── Galeria.jsx
    ├── SobreMi.jsx
    ├── Contacto.jsx
    ├── Footer.jsx
    └── SectionHeader.jsx      # Componente reutilizable
```

---

## 🌐 Deploy

**Vercel (recomendado — gratis):**
1. Subí el proyecto a GitHub
2. Entrá a https://vercel.com
3. Importá el repositorio
4. Deploy automático ✅

**Netlify:**
- Build command: `npm run build`
- Publish directory: `dist`
