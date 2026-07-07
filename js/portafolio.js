/*
 * portafolio.js
 * Script personalizado para el portafolio.
 * Se encarga de:
 *  1. Validar el formulario de contacto en el navegador (sin backend real).
 *  2. Mostrar un mensaje de confirmación cuando el formulario es válido.
 */

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
            // Muestra los mensajes de error de Bootstrap
            form.classList.add('was-validated');
            status.innerHTML = '';
            return;
        }

        // Formulario válido: como no hay backend, solo mostramos un mensaje.
        const nombre = document.getElementById('nombre').value.trim();

        status.innerHTML = `
            <div class="alert alert-success" role="alert">
                ¡Gracias, ${nombre}! Tu mensaje fue registrado. (Este formulario es una demostración,
                para conectarlo a un servicio real puedes usar Formspree, EmailJS o un backend propio).
            </div>
        `;

        form.reset();
        form.classList.remove('was-validated');
    });
});
