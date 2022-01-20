
function generarTabla() {
    var filas = 1;
    var columnas = 3;
    var contenedorTabla = document.getElementById('g1');
    var contenedorPalabra = document.getElementById('fgusto');
    var tabla = "<table class='temporal'>";


    tabla += "<tr>";
    tabla += "<td>" + contenedorPalabra + "</td>";
    tabla += "<td>0</td><td>Editar</td>";
    
    tabla += "</tr>"

    tabla += "</table>"
    contenedorTabla.innerHTML += tabla;
}