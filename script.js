
var boton = document.getElementById("miBoton");
var descripcion = document.getElementById("descripcion");
let camilo = document.getElementById("juanCamilo")

// Añadimos un evento 'click' al botón
boton.addEventListener("click", function() {

    if (descripcion.style.display === "none") {
        descripcion.style.display = "block";
        boton.textContent = "Ocultar😊Descripción";
    } else {
        descripcion.style.display = "none";
        boton.textContent = "Mostrar😑Descripción";
    }
});

 // Función para lanzar confeti
 function lanzarConfeti() {
    confetti({
        particleCount: 1000,
        spread: 200,
        origin: { y: 0.6}
    });
}

// Función para el efecto de escritura del mensaje
function mostrarMensaje() {
    const message = document.getElementById('message');
    message.classList.add('show-text'); // Añadir la clase para animar el texto
}

// Vinculamos ambos efectos al botón
document.getElementById('actionButton').addEventListener('click', function() {
    lanzarConfeti();     // Activar confeti
    mostrarMensaje();    // Activar el efecto de escritura
});