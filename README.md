# VFH Developer Portfolio

Este es un proyecto de portafolio personal creado con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/), enfocado en la muestra de mis proyectos profesionales, habilidades técnicas, e información sobre mi y de contacto, además de otros datos relevantes.

## Características

- **Perfil**: Incluye una breve descripción sobre mi como desarrollador fullstack y soporte IT, además de habilidades técnicas y experiencia.
- **Proyectos**: Sección para mostrar proyectos destacados con descripción, tecnologías utilizadas y enlaces a los repositorios o demostraciones en vivo.
- **Habilidades**: Lenguales, librerías y tecnologías de las cuales poseo conocimiento y experiencia.
- **Contacto**: Formulario de contacto funcional para recibir mensajes directamente al correo, además de enlaces a LinkedIn y GitHub.

## Tecnologías utilizadas

- **Astro**: Para la generación de páginas estáticas rápidas y optimizadas.
- **Tailwind CSS**: Para un diseño moderno, responsivo y altamente personalizable.
- **Resend**: Para la funcionalidad de envío de correos en el formulario de contacto.

## Configuración del proyecto

### Requisitos previos

- Node.js (versión 16 o superior)
- Un archivo `.env` configurado con la clave de API para Resend.

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
SECRET_RESEND_API_KEY=tu_clave_api_de_resend
