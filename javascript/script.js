// Aquí defino las variables //

let totalvisitaGuiada1 = 0
let totalvisitaGuiada2 = 0
let totalvisitaGuiada3 = 0
let precioTotal = 0
//Aquí defino funcion//
function calculo (cantidad, precio){
    precioTotal += (cantidad * precio)
}

//Función constructora
function Visita (nombre, precio, vacantes) {
    this.nombre = nombre;
    this.precio = precio;
    this.vacantes = vacantes;
}

let visitaGuiada1 = new Visita ("Basilica San Pietro y Museos Vaticanos", 30, 15);
let visitaGuiada2 = new Visita ("Coliseo y Foro Palatino", 25, 0);
let visitaGuiada3 = new Visita ("Pantheon y Centro Histórico", 20, 3);

const listaVisitas = [visitaGuiada1, visitaGuiada2, visitaGuiada3];
const listaVisitasDisponibles = listaVisitas.filter(visita => visita.vacantes > 0);

const nombresVisitasDisponibles = listaVisitasDisponibles.map((visita, i) => i + 1 + " - " + visita.nombre);


console.log(nombresVisitasDisponibles);

let precioVisitaGuiada1 = 30
let precioVisitaGuiada2 = 25
let precioVisitaGuiada3 = 20

//Comienzo del ciclo
alert("Bienvenido a ROMA, città eterna")

//preguntamos que seleccione la visita guiada de su preferencia
let compra = prompt("Escriba el número correspondiente de la visita guiada que desea realizar\n" + nombresVisitasDisponibles.join('\n') + "\nO escriba ESC para Salir")

console.log('compra antes del if', compra);
if (true) {
    //Una vez que el usuario elige afirmativamente la visita guiada, comienza el calculo de lugares y precio//
    while (compra !== "ESC"){

        if(compra == 1){
            let cantidadvisitaGuiada1 = prompt("seleccione cantidad de lugares para la visita de " + nombresVisitasDisponibles[0] + " que desea reservar")
            totalvisitaGuiada1= calculo(cantidadvisitaGuiada1, visitaGuiada1.precio) 
        }
        
            else if(compra == 2){
            let cantidadvisitaGuiada2 = prompt("seleccione cantidad de lugares para la visita de " + nombresVisitasDisponibles[1] + " que desea reservar")
            totalvisitaGuiada2= calculo(cantidadvisitaGuiada2, visitaGuiada2.precio) 
        }

        else if(compra == 3){
            let cantidadvisitaGuiada3 = prompt("seleccione cantidad de lugares para la visita de " + nombresVisitasDisponibles[2] + " que desea reservar")
            totalvisitaGuiada3= calculo(cantidadvisitaGuiada3, visitaGuiada3.precio) 
        }

    //volvemos a preguntar por si el usuario decide comprar otra visita guiada//
        compra = prompt("Para Comprar otra visita guiada, escriba el número correspondiente a la misma:\n" + nombresVisitasDisponibles.join('\n') + "\nO escriba ESC para Salir")
    }
}
//calculo de precio total//
if (precioTotal != 0){
    alert("Tu visita ha sido reservada\n El precio total de sus visitas guiadas es: " + precioTotal)
}
// termina el ciclo de compra//
    alert("Gracias por visitarnos!")
