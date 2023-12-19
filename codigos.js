function cambiarContenido() {
    var opciones = document.getElementById("opciones");
    var contenido = document.getElementById("contenido");
  
    if (opciones.value === "opcion1") {
        contenido.innerHTML = "Seleccione una opción para ver más información.";
    } else if (opciones.value === "opcion2") {
         window.location.href = "calculadoras/ds.html";
    } else if (opciones.value === "opcion3") {
         window.location.href = "calculadoras/monto.html";
    } else if (opciones.value === "opcion4") {
        window.location.href = "calculadoras/tasa.html";
    } else if (opciones.value === "opcion5") {
        window.location.href = "calculadoras/tiempo.html";
    }
 }