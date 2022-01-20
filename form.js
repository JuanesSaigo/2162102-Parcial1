
function generarTabla() {
    var contenedorTabla = document.getElementById('tablaGusto');
    var contenedorPalabra = document.getElementById('fgusto').value;
    
    var tabla = "<tr>";


    tabla += "<td>" + contenedorPalabra + "</td>";
    tabla += "<td>0</td><td><input class='but2' type='button' value='Editar' onclick='editarTabla()'></td>";
    
    tabla += "</tr>"

    tabla += "</table>"
    contenedorTabla.innerHTML += tabla;
    document.getElementById('fgusto').value = "";
}

function editarTabla(){
    var contenedorTabla = document.getElementById('tablaGusto');

}