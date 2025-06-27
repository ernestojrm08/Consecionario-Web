// Realizado por Ernesto Rengifo
document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.formulario-contacto');

  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();

      const datosFormulario = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        motivo: document.getElementById('motivo').value,
        mensaje: document.getElementById('mensaje').value,
        fechaEnvio: new Date().toISOString()
      };

      // Obtener registros anteriores o crear uno nuevo
      let baseDatos = JSON.parse(localStorage.getItem('mensajesContacto')) || [];

      // Agregar nuevo mensaje
      baseDatos.push(datosFormulario);

      // Guardar de nuevo en localStorage
      localStorage.setItem('mensajesContacto', JSON.stringify(baseDatos));

      alert('✅ ¡Gracias por contactarnos! Tu mensaje fue guardado.');
      formulario.reset();
    });
  }
});

// script para el menú responsivo - Ernesto Rengifo

document.addEventListener("DOMContentLoaded", () => {
  // seleccionamos el boton hamburguesa y la barra de navegación
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav");
  // verificamos que ambos elementos existan
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active"); // alternar visibilidad del menu
    });
  }
});


// script para el carrusel de imágenes - Ernesto Rengifo
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-button.left');
  const nextBtn = document.querySelector('.carousel-button.right');
  const dots = Array.from(document.querySelectorAll('.carousel-indicator'));

  const slideWidth = slides[0].getBoundingClientRect().width;

  // Colocar cada slide
  slides.forEach((slide, index) => {
    slide.style.left = (slideWidth * index) + 'px';
  });

  const moveToSlide = (targetIndex) => {
    track.style.transform = `translateX(-${slideWidth * targetIndex}px)`;
    track.querySelector('.current-slide')?.classList.remove('current-slide');
    slides[targetIndex].classList.add('current-slide');
    document.querySelector('.carousel-indicator.current-slide')?.classList.remove('current-slide');
    dots[targetIndex].classList.add('current-slide');
  };

  // Botón siguiente
  nextBtn.addEventListener('click', () => {
    const currentIndex = slides.findIndex(slide => slide.classList.contains('current-slide'));
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
  });

  // Botón anterior
  prevBtn.addEventListener('click', () => {
    const currentIndex = slides.findIndex(slide => slide.classList.contains('current-slide'));
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
  });

  // Click en indicadores
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      moveToSlide(idx);
    });
  });
});



