function enviar() {
    let nombre= document.getElementById("nombre").value
    let apellido= document.getElementById("apellido").value
    let edad= document.getElementById("edad").value
    let pais= document.getElementById("pais").value
    let posicion = document.getElementById("posicion").value

    if (posicion == "1"){
        document.getElementById("mostrarnombre1").innerHTML = nombre
        document.getElementById("mostrarapellido1").innerHTML = apellido
        document.getElementById("mostraredad1").innerHTML = edad
        document.getElementById("mostrarpais1").innerHTML = pais
    }
    else if (posicion == "2"){
        document.getElementById("mostrarnombre2").innerHTML = nombre
        document.getElementById("mostrarapellido2").innerHTML = apellido
        document.getElementById("mostraredad2").innerHTML = edad
        document.getElementById("mostrarpais2").innerHTML = pais
    }
    else if (posicion == "3"){
        document.getElementById("mostrarnombre3").innerHTML = nombre
        document.getElementById("mostrarapellido3").innerHTML = apellido
        document.getElementById("mostraredad3").innerHTML = edad
        document.getElementById("mostrarpais3").innerHTML = pais
    }
    else{
        alert ("No entra en el podio")
    }
}
