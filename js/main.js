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

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");

  if (isOpen) {
    // expande hasta su altura real
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    // colapsa
    nav.style.maxHeight = "0";
  }
});




