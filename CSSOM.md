:root
├── Variables CSS (--main-color, --secondary-color, etc.)

body
├── display: grid
├── grid-template-rows: auto 1fr auto
├── min-height: 100vh
└── font-family: 'Arial'

.header
├── display: flex
├── background-color: var(--secondary-color)
└── justify-content: center

.logo
├── width: 90px
├── border-radius: 50%
└── border: 2px solid var(--main-color)

.nav a
├── color: var(--text-light)
└── transition: color 0.3s ease
   └── :hover → color: var(--main-color)

.vehiculos
├── display: grid
└── grid-template-columns: repeat(3, 1fr)

.tarjeta
├── transition: all 0.3s ease
└── :hover → transform + box-shadow

@keyframes fadeIn
└── Uso en .tarjeta y main