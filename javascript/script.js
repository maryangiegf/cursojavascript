
// Aqui defino las variables //
let visitaGuiada1 = "Basilica San Pietro y Museos Vaticanos"
let visitaGuiada2 = "Coliseo y Foro Palatino"
let visitaGuiada3 = "Pantheon y Centro Histórico"
let precioVisitaGuiada1 = 30
let precioVisitaGuiada2 = 25
let precioVisitaGuiada3 = 20
let totalvisitaGuiada1 = 0
let totalvisitaGuiada2 = 0
let totalvisitaGuiada3 = 0
let precioTotal = 0
//Aqui defino funcion//
function calculo (cantidad, precio){
    precioTotal += (cantidad * precio)
}

//Comienzo del ciclo//
alert("Bienvenido a ROMA, città eterna")

//preguntamos que seleccione la visita guiada de su preferencia//
    let compra = prompt("Escriba el número correspondiente de la visita guiada que desea realizar\n 1- Basilica San Pietro y Museos Vaticanos\n 2- Coliseo y Foro Palatino\n 3- Pantheon y Centro Histórico\n 4- O escriba ESC para Salir")

//Una vez que el usuario elige afirmativamente la visita guiada, comienza el calculo de lugares y precio//
while (compra.toUpperCase() != "ESC"){

    if(compra == 1){
        let cantidadvisitaGuiada1 = prompt("seleccione cantidad de lugares para la visita de " + visitaGuiada1 + " que desea reservar")
        totalvisitaGuiada1= calculo(cantidadvisitaGuiada1, precioVisitaGuiada1) 
    }
    
       else if(compra == 2){
        let cantidadvisitaGuiada2 = prompt("seleccione cantidad de lugares para la visita de " + visitaGuiada2 + " que desea reservar")
        totalvisitaGuiada2= calculo(cantidadvisitaGuiada2, precioVisitaGuiada2) 
    }

    else if(compra == 3){
        let cantidadvisitaGuiada3 = prompt("seleccione cantidad de lugares para la visita de " + visitaGuiada3 + " que desea reservar")
        totalvisitaGuiada3= calculo(cantidadvisitaGuiada3, precioVisitaGuiada3) 
    }

//volvemos a preguntar por si el usuario decide comprar otra visita guiada//
    compra = prompt("Para Comprar otra visita guiada, escriba el número correspondiente a la misma:\n 1- Basilica San Pietro y Museos Vaticanos\n 2- Coliseo y Foro Palatino\n 3- Pantheon y Centro Histórico\n 4- O escriba ESC para Terminar")
}
//calculo de precio total//
if (precioTotal != 0){
    alert("Tu visita ha sido reservada\n El precio total de sus visitas guiadas es: " + precioTotal)
}
// termina el ciclo de compra//
    alert("Gracias por visitarnos!")