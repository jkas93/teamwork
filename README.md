# Teamwork Consultoría - Sitio Web Oficial

Sitio web corporativo de **Teamwork Consultoría**, expertos en cultura organizacional, coaching de liderazgo y desarrollo de equipos de alto rendimiento.

## Tecnologías

- HTML5 semántico
- CSS3 (Bootstrap 5)
- JavaScript (jQuery, Swiper, WOW.js)
- SEO On-Page optimizado

## Estructura del Proyecto

```
├── assets/          # CSS, JS, imágenes y fuentes
├── components/      # Header y Footer reutilizables
├── build.js         # Script compilador de componentes
├── index.html       # Página de inicio
├── about.html       # Sobre nosotros
├── services.html    # Servicios
├── project.html     # Portafolio / Casos de éxito
├── contact.html     # Contacto
└── project-details-*.html  # Detalle de cada caso de éxito
```

## Desarrollo Local

```bash
npm run build    # Sincroniza header/footer en todas las páginas
npx serve        # Inicia servidor local en puerto 3000
```

## Despliegue

El sitio se despliega automáticamente en **Vercel** al hacer push a la rama `main`.
