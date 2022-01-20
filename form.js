
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

    /*
    document.getElementById('g1').style.height += "+ 25px";
    document.getElementsByClassName('grid0').style.height +="+ 25px"; 
    document.getElementsByClassName('flag').style.height.va; 
    document.getElementById('updater').style.height +="+ 25px";
    document.getElementById('g1').style.height.to;*/
}

function editarTabla(){
    document.getElementById('sending').style.visibility = "visible";
}