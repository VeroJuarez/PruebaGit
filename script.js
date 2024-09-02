document.getElementById("formulario").onsubmit = function(event) {
    // Realizar validación
    if (this.checkValidity()) {
        alert("Formulario enviado con éxito!");
    } else {
        alert("Por favor, completa los campos correctamente.");
        event.preventDefault();  // Evita el envío si hay errores
    }
};

document.getElementById("estilo1").onclick = function() {
    document.body.classList.remove("estilo-alto-contraste");
    document.body.classList.add("estilo-claro");
};

document.getElementById("estilo2").onclick = function() {
    document.body.classList.remove("estilo-claro");
    document.body.classList.add("estilo-alto-contraste");
};
