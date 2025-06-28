// js/carrusel.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  // Función para mostrar solo el slide activo
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  // Avanza al siguiente slide
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Retrocede al slide anterior
  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  // Botones de control manual
  document.getElementById("next").addEventListener("click", nextSlide);
  document.getElementById("prev").addEventListener("click", prevSlide);

  // Mostrar el primer slide y activar autoavance
  showSlide(current);
  setInterval(nextSlide, 5000); // cambia cada 5 segundos
});
