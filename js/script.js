// Cambio de modo oscuro y claro
const botonModo = document.getElementById("modo_btn");

botonModo.addEventListener("click", function () {

    document.body.classList.toggle("modo_oscuro");

    if (document.body.classList.contains("modo_oscuro")) {
        botonModo.textContent = "☀️ Modo claro";
    } else {
        botonModo.textContent = "🌙 Modo oscuro";
    }

});

// Validación del formulario
const formulario = document.getElementById("formulario_contacto");
const mensajeFormulario = document.getElementById("mensaje_formulario");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    if (!formulario.checkValidity()) {

        mensajeFormulario.textContent =
            "Por favor, completa correctamente todos los campos obligatorios!";

        mensajeFormulario.style.color = "#D396A6";

        formulario.reportValidity();

        return;
    }

    mensajeFormulario.textContent =
        "¡Mensaje enviado correctamente! Gracias por contactarme.";

    mensajeFormulario.style.color = "#09A1A1";

    formulario.reset();

});