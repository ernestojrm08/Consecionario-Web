Documentos
└── html (lang="es")
    ├── head
    │   ├── meta (charset="UTF-8")
    │   ├── meta (viewport)
    │   ├── title (según página)
    │   ├── link (css/estilos.css)
    │   ├── script[src="js/main.js"]
    │   └── comentario (Realizado por: Diego Aguilar)
    │
    └── body
        ├── comentario (Realizado por: Diego Aguilar)
        ├── header.header
        │   ├── div.logo
        │   │   └── a[href="index.html"]
        │   │       └── img (Logo Concesionario)
        │   └── nav.nav
        │       ├── a[href="index.html"] (Inicio)
        │       ├── a[href="servicios.html"] (Servicios)
        │       ├── a[href="nosotros.html"] (Nosotros)
        │       └── a[href="contacto.html"] (Contacto)
        │
        ├── main.landing
        │   ├── index.html
        │   │   ├── div.hero-text
        │   │   │   ├── h1 (Bienvenido a Concesionario de Vehículos)
        │   │   │   └── p (Descripción breve)
        │   │   └── section.vehiculos
        │   │       ├── article.tarjeta ×6 (Camionetas 1 a 6)
        │   │           ├── img
        │   │           ├── h3
        │   │           ├── p (descripción)
        │   │           ├── p.precio
        │   │           └── button.btn (Más información)
        │
        │   ├── nosotros.html
        │   │   ├── div.hero-text
        │   │   │   ├── h1 (Sobre Nosotros)
        │   │   │   └── p (Texto descriptivo)
        │
        │   ├── servicios.html
        │   │   ├── div.hero-text
        │   │   │   ├── h1 (Nuestros Servicios)
        │   │   │   └── ul
        │   │   │       ├── li (Venta de vehículos nuevos y usados)
        │   │   │       ├── li (Planes de financiamiento)
        │   │   │       ├── li (Servicio técnico especializado)
        │   │   │       ├── li (Asesoramiento personalizado)
        │   │   │       └── li (Garantía extendida)
        │
        │   └── contacto.html
        │       ├── div.hero-text
        │       │   └── h1 (Contáctanos)
        │       └── form.formulario-contacto
        │           ├── label[for="nombre"] (Nombre)
        │           ├── input#nombre[type="text"]
        │           ├── label[for="email"] (Correo electrónico)
        │           ├── input#email[type="email"]
        │           ├── label[for="motivo"] (Motivo del contacto)
        │           ├── select#motivo
        │           │   ├── option (Seleccione una opción)
        │           │   ├── option (Consulta sobre vehículo)
        │           │   ├── option (Solicitar cita)
        │           │   ├── option (Soporte técnico)
        │           │   └── option (Otro)
        │           ├── label[for="mensaje"] (Mensaje)
        │           ├── textarea#mensaje
        │           └── button[type="submit"] (Enviar)
        │
        └── footer.footer
            └── p (© Correre 2025 Concesionario. Todos los derechos reservados.)

