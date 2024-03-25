//  Ejercicio 1
console.log("Ejercicio 1")
let num1 = 4;
let num2 = 5;

if (num1 > num2){
    console.log(num1);
} else{
    console.log(num2); 
}

// Ejercicio 2
console.log("Ejercicio 2")
if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1){
    console.log(num2)
}else {
    console.log(`Los numeros son iguales`)
}

// Ejercicio 3
console.log("Ejercicio 3")
if (num1 == num2) {
    console.log(`Los numeros son iguales`);
} else {
    console.log(`Los numeros son diferentes`)
}

// Ejercicio 4
console.log ("Ejercicio 4")

let fecha1 = "2018-9-02";
let fecha2 = "2023-7-5";

if (fecha2 > fecha1) {
    console.log(`La fecha ${fecha2} es mayor que ${fecha1}`);
} else if (fecha2 == fecha1) {
    console.log(`Las fechas son iguales`); 
} else {
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
}

// Ejercicio 5
console.log ("Ejercicio 5")

let fecha3 = "2022-09-02"
let fecha4 = "2002-11-05"

if (fecha3 > fecha4){
    console.log(`La fecha ${fecha3} es mayor que ${fecha4}`)
} else if (fecha3 == fecha4) {
    console.log(`Las fechas son iguales`)
} else{
    console.log (`La fecha ${fecha4} es menor que ${fecha3}`)
}

// Ejercicio 6
console.log ("Ejercicio 6")

let dato1 = 5
let dato2 = 7
let dato3 = 9

switch (true){
    case dato1 > dato2 && dato1 > dato3:
        console.log(`${dato1} es el mayor`)
    break
    case dato2 > dato1 && dato2 > dato3:
        console.log(`${dato2} es el mayor`)
    break
    case dato3 > dato2 && dato3 > dato1:
        console.log(`${dato3} es el mayor`)
    break
}

// Ejercicio 7
console.log ("Ejercicio 7")

let color = prompt("Elija un color entre estos 3: rojo, azul o verde")
switch (true){
    case color == "rojo":
        alert("El color de la pasión")
        console.log("El color de la pasión")
    break
    case color == "azul":
        alert("El color del mar")
        console.log("El color del mar")
    break
    case color == "verde":
        alert("El color de la naturaleza")
        console.log("El color de la naturaleza")
    break
}

// Ejercicio 8
console.log ("Ejercicio 8")

let valor1 = parseInt(prompt("Ingrese primer valor del 1 al 100"))
let valor2 = parseInt(prompt("Ingrese segundo valor del 1 al 100"))
let operacion = prompt("Elija una operacion: suma - resta - división - multiplicación - raíz")
switch (true){
    case operacion == "suma" ||"Suma" || "SUMA":
        let suma = valor1 + valor2
        alert(`El resultado de la suma ${valor1} + ${valor2} es ${suma}`)
        console.log(`El resultado de la suma ${valor1} + ${valor2} es ${suma}`)
    break
    case operacion == "resta" ||"Resta" || "RESTA":
        let resta = valor1 - valor2
        alert(`El resultado de la resta ${valor1} - ${valor2} es ${resta}`)
        console.log(`El resultado de la resta ${valor1} - ${valor2} es ${resta}`)
    break
    case operacion == "division" || "Division" || "DIVISION" || "división" || "División" || "DIVISIÓN":
        let division = valor1 / valor2
        alert(`El resultado de la divicion ${valor1} / ${valor2} es ${division}`)
        console.log(`El resultado de la division ${valor1} / ${valor2} es ${division}`)
    break
    case operacion == "multiplicacion" || "Multiplicacion" || "MULTIPLICACION" || "multiplicación" || "Multiplicación" || "MULTIPLICACIÓN":
        let multiplicacion = valor1 * valor2
        alert(`El resultado de la multiplicacion ${valor1} * ${valor2} es ${multiplicacion}`)
        console.log(`El resultado de la multiplicacion ${valor1} * ${valor2} es ${multiplicacion}`)
    break
    case operacion == "raiz" || "Raiz" || "RAIZ" || "raíz" || "Raíz" || "RAÍZ":
        let raiz = valor1 * Math.sqrt(valor2)
        alert(`Su resultado es ${raiz}`)
        console.log(`Su resultado es ${raiz}`)
    break
}

// Ejercicio 9
console.log ("Ejercicio 9")

let persona1 = {
        nombre : "Messi chiquito",
        edad : 36,
        altura : 1.24
}
let persona2 = {
        nombre : "Julian",
        edad : 24,
        altura : 1.70
}
if (persona1 > persona2.altura){
    console.log(`${persona1.nombre} es mas alto que ${persona2.nombre}`)
} else {
    console.log(`${persona2.nombre} es mas alto que ${persona1.nombre}`)
}
if (persona1.edad > persona2.edad){
    console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`)
} else{
    console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`)
}

// Ejercicio 10
console.log ("Ejercicio 10")

let nombre = prompt("Ingrese su nombre")
let edad = parseInt(prompt("Ingrese su edad"))
let altura = Number(prompt("Ingrese su altura en cm (ejemplo 1.20 = 120)"))
let vision = Number(prompt("Ingrese su vision (del 8 al 10)"))
if (edad >= 18 && altura >= 110 && vision >= 8 && vision <= 10){
    console.log(`${nombre}, estas capacitado para conducir`)
}  

// Ejercicio 11
console.log ("Ejercicio 11")

let miEdad = Number(prompt("Ingrese su edad"))

switch (true){
    case miEdad >= 0 && miEdad <= 12:
        alert(`Usted es un infante`)
    break
    case miEdad > 13 && miEdad <= 18:
        alert(`Usted es un adolescente`)
    break
    case miEdad > 19 && miEdad <= 45:
        alert(`Usted es un joven`)
    break
    case miEdad > 45 && miEdad <= 99:
        alert(`Viste a independiente levantar una copa`)
    break
    case miEdad > 100:
        alert(`Viste a Uruguay ganar un mundial`)
    break
}

// Ejercicio 12
console.log ("Ejercicio 12")

let datoIngresado = Number(prompt("Ingrese un numero del 1 al 3"))

if (datoIngresado >3 || datoIngresado < 1){
        alert(`Valor no permitido`)
} else { 
    let datoRandom = Number(prompt("Ingrese un numero aleatorio"))
    switch (true){
        case datoIngresado == 1:
            alert(`El valor del dato ingresado es: ${datoIngresado * datoRandom}`)
        break
        case datoIngresado == 2:
            alert(`El valor del doble del  dato ingresado es: ${datoIngresado * datoRandom}`)
        break
        case datoIngresado == 3:
            alert(`El valor del triple del dato ingresado es: ${datoIngresado * datoRandom}`)
        break

    }
}

// Ejercicio 13
console.log ("Ejercicio 13")
let nombreCliente = prompt("Porfavor, ingrese su nombre")
let paseCliente = prompt("¿Tiene pase VIP o NORMAL?")
let entrada = prompt("¿Posee usted entrada? (si o no)")

switch (true){
    case nombreCliente == "Leonel" || paseCliente == "VIP":
        alert("Bienvenido")
    break
    case entrada == "si":
        let compraEntrada = prompt("¿Desea utilizar su entrada?")
        if (compraEntrada == "no"){
            alert("Hasta luego, vuelva pronto")
        } else{
            alert("Bienvenido")
        }
    break
    default:
            let compraCliente = prompt("¿Desea usted comprar una entrada? (si o no)")
                if (compraCliente == "si"){
                    let valorCompra = Number(prompt("Ingrese cuanto dinero tiene disponible"))
                    if (valorCompra >= 1000){
                        alert(`Venta exitosa, bienvenido.`)
                    }else{
                        alert(`No se pudo completar el pago por falta de saldo, No vuelva mas.`)
                    }
                } else{
                    alert(`No vuelva mas.`)
                }
    break
}