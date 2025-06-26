Iniciamos diseño de pagina web para FrontEnd.

## Autor
Realizado por: Diego Aguilar

## Funcionalidades
- Navegación entre páginas
- Visualización de modelos de camionetas en la Landing Page
- Información institucional y de servicios
- Formulario de contacto básico (sin funcionalidad backend)

## Cómo usar
1. Clonar o descargar el repositorio.
2. Abrir el archivo `index.html` en un navegador web moderno.
3. Navegar por las diferentes secciones usando el menú.

## Tecnologías utilizadas
- HTML5

¡Gracias por revisar el proyecto!

/////REVISAR/////


### Integrante 1 (Paola)

#### HTML Semántico
- Estructura completa utilizando etiquetas semánticas HTML5
- Uso adecuado de:
  - `<header>`, `<nav>`, `<main>`, `<footer>`
  - `<section>` para agrupar contenido relacionado
  - `<article>` para elementos independientes (tarjetas de vehículos)
- Atributos ARIA para mejorar accesibilidad:
  - `aria-label` en secciones importantes
  - `aria-current` en enlace activo

#### Efecto Parallax
- Implementado en sección hero y divisoria
- Características:
  - Control de velocidad mediante `data-speed`
  - Desactivación automática en móviles
  - Imágenes optimizadas para performance

#### Accesibilidad
- Textos alternativos descriptivos en imágenes
- Contraste adecuado en todos los textos
- Navegación por teclado habilitada
- Roles ARIA donde fueron necesarios

#### Pruebas Responsive
- Verificación en:
  - Móviles (viewport < 768px)
  - Tablets (768px - 1024px)
  - Escritorio (> 1024px)
- Puntos verificados:
  - Legibilidad de textos
  - Comportamiento del parallax
  - Reorganización de elementos