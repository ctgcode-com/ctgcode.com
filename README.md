# CTG Code — Sitio Web Oficial

Repositorio oficial del sitio web de **CTG Code** (ctgcode.com), un estudio independiente de ingeniería de software y desarrollo backend robusto. Este sitio está diseñado bajo una arquitectura web moderna, priorizando un rendimiento impecable, interfaces inmersivas en modo oscuro y una velocidad de carga óptima.

---

## Stack Tecnológico

El proyecto está estructurado utilizando herramientas de última generación para garantizar el menor tiempo de carga (Time to First Byte) y un SEO sobresaliente:

- **Framework Principal:** [Astro](https://astro.build/) (Aprovechando su arquitectura de islas y renderizado estático/híbrido optimizado).
- **Estilos y UI:** [Tailwind CSS](https://tailwindcss.com/) (Para una maquetación ágil basada en utilidades y control preciso de la paleta de colores).
- **Despliegue e Infraestructura:** [Vercel](https://vercel.com/) / [Hostinger](https://hostinger.co/) (Configurado con pipelines de CI/CD automáticos desde este repositorio).

---

## Estructura del Repositorio

En este _commit_ inicial se establece la base legal, el control de versiones y la documentación del proyecto:

- `.gitignore`: Exclusión de directorios de dependencias (`node_modules`), compilaciones de producción e información sensible de configuración local.
- `LICENSE.md`: Términos de propiedad intelectual y derechos de autor vigentes en Colombia.
- `CHANGELOG.md`: Registro estructurado y cronológico de los cambios del sistema.
- `README.md`: Documentación técnica y especificaciones del stack.

---

## Inicialización del Proyecto

El entorno de desarrollo local se gestiona mediante pnpm y está configurado bajo una arquitectura de Generación de Sitios Estáticos (SSG) con Astro:

### Instalar Dependencias

Descarga y vincula los módulos necesarios para el proyecto:

```bash
pnpm install

```

### Servidor de Desarrollo

Inicia el entorno local con recarga en vivo para validar los cambios en tiempo real:

```bash
pnpm dev

```

### Compilar para Producción

Genera la versión optimizada y estática del sitio (SSG) dentro del directorio `dist/`:

```bash
pnpm build

```

### Previsualizar Producción

Levanta un servidor local para probar los archivos estáticos ya compilados antes del despliegue real:

```bash
pnpm preview

```
