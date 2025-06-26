/**
 * Implementación de efecto parallax para secciones destacadas
 * 
 * Este script aplica el efecto parallax a elementos con:
 * - Clase .parallax-section
 * - Atributo data-speed (controla velocidad del efecto)
 * 
 * El efecto se desactiva automáticamente en dispositivos táctiles
 */

document.addEventListener('DOMContentLoaded', function() {
    // Detectar dispositivos táctiles
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
    
    if (!isTouchDevice) {
        // Seleccionar todas las secciones parallax
        const parallaxSections = document.querySelectorAll('.parallax-section');
        
        // Aplicar efecto al hacer scroll
        window.addEventListener('scroll', function() {
            parallaxSections.forEach(section => {
                const speed = parseFloat(section.dataset.speed) || 0.5;
                const scrollPosition = window.pageYOffset;
                const sectionOffset = section.offsetTop;
                
                // Calcular desplazamiento para el efecto
                const offset = (scrollPosition - sectionOffset) * speed;
                
                // Aplicar transformación al fondo
                section.style.backgroundPositionY = offset + 'px';
                
                // Opcional: Mover contenido interno a diferente velocidad
                const content = section.querySelector('.hero-text');
                if (content) {
                    content.style.transform = `translateY(${offset * 0.3}px)`;
                }
            });
        });
    }
});