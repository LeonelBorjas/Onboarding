// Ejercicio 1
console.log("Ejercicio 1")

function add() {
    console.log (100*20)
}

// Ejercicio 2
console.log("Ejercicio 2")

add()

// Ejercicio 3
console.log("Ejercicio 3")

function addParametros(x, y){
    console.log(x * y)
}

// Ejercicio 4
console.log("Ejercicio 4")

let numeroA = 100
let numeroB = 20

addParametros(numeroA, numeroB)

// Ejercicio 5
console.log("Ejercicio 5")

function addReturn(x, y){
    let multi = x *  y 
    return multi    
}

const resultado = addReturn(numeroA, numeroB)
console.log(resultado)

// Ejercicio 6
console.log("Ejercicio 6")

const adds = function (x, y){
    let multi2 = x * y
    return multi2
}

const resultado2 = adds(numeroA, numeroB)

console.log(resultado2)

// Ejercicio 7
console.log("Ejercicio 7")

let solo = "leonel"

function saludar(solo) {
    console.log(`Hola ${solo}, mirate solo leveling`)
}
saludar(solo)

// Ejercicio 8
console.log("Ejercicio 8")
const numeroC = 3
const numeroD = 2

const numberMulti = function (x, y){
    const multi2 = x * y
    return multi2
}

const resultado3 = numberMulti(numeroC, numeroD)

console.log(resultado3)

// Ejercicio 9
console.log("Ejercicio 9")

let base = 3
let altura = 5

function area(x, y){
    return (x * y)/2}
const calcarea = area(base, altura)

console.log(calcarea)

// Ejercicio 10
console.log("Ejercicio 10")

let lado1 = 10
let lado2 = 5
let lado3 = 5

function perimetro (x, y, z){
    return (x + y + z)
}

const perimetroTriangulo = perimetro(lado1, lado2, lado3)

console.log (perimetroTriangulo)

// Ejercicio 11
console.log("Ejercicio 11")

let precio = Number(prompt("Ingrese precio"))
let cantidad = Number(prompt("Ingrese cantidad"))

const totalCompra = (x, y) => (x * y)

const compraTotal = totalCompra(precio, cantidad)

console.log (compraTotal)

switch(true){
    case cantidad >= 10 && cantidad < 20:
        const conDescuento10 = (compraTotal - (compraTotal * 0.10))
        console.log(`Su total a pagar es de ${conDescuento10}, ya recibio un descuento del 10% ($${compraTotal * 0.10})`)
    break
    case cantidad >=20:
        const conDescuento20 = (compraTotal - (compraTotal * 0.20))
        console.log(`Su total a pagar es de ${conDescuento20}, ya recibio un descuento del 20% ($${ compraTotal * 0.20})`)
    break
}

// Ejercicio 12
console.log("Ejercicio 12")
let isAnAdult2 = Number(prompt("Ingrese su edad"))

function isAnAdult  (edad){
    if (isAnAdult2 >= 18){
        return console.log ("Es mayor de edad")
    } else{
        return console.log ("Es menor de edad")
    }
}

isAnAdult (isAnAdult2)


// Ejercicio 13
console.log("Ejercicio 13")

let ingresos = Number(prompt("Ingrese el monto de sus ingresos"))

function impuestos (apagar){
    switch (true){
        case ingresos <= 10000:
            console.log (`Usted debe pagar un impuesto del 10% de su ingreso, el cual es: ${ingresos * 0.10}`)
        break
        case ingresos >= 10000 && ingresos <= 20000:
            console.log (`Usted debe pagar un impuesto del 15% de su ingreso, el cual es: ${ingresos * 0.15}`)
        break
        case ingresos > 20000:
            console.log (`Usted debe pagar un impuesto del 20% de su ingreso, el cual es: ${ingresos * 0.20}`)
        break
    }
}
impuestos(ingresos)

// Ejercicio 14
console.log("Ejercicio 14")

let diaIngresado = Number(prompt("Ingrese un dia"))

function verificarDia (dia){
    switch (true){
        case diaIngresado >= 1 && diaIngresado <= 5:
            return console.log ("Es un dia laboral")
        break
        case diaIngresado == 6 || diaIngresado == 7:
            return console.log ("Es fin de semana")
        break
        default:
            return console.log ("Dato incorrecto")
    }
}

verificarDia(diaIngresado)

// Ejercicio 15
console.log("Ejercicio 15")

function guardarInformacionPersonal() {
    let nombre = prompt("Ingrese su Nombre");
    if (!nombre) {
        console.error("El nombre no puede estar vacío");
        return; 
    }
    let apellido = prompt("Ingrese su Apellido");
    if (!apellido) {
        console.error("El apellido no puede estar vacío");
        return;
    }
    let edad = prompt("Ingrese su Edad");
    if (!edad) {
        console.error("La edad no puede estar vacía");
        return;
    }
    edad = parseInt(edad);
    if (isNaN(edad) || edad < 0) {
        console.error("Edad inválida");
        return;
    }
    let informacionPersonal = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    };
    console.log("Información Personal:");
    console.log(informacionPersonal);
}

guardarInformacionPersonal();

// Ejercicio 16
console.log("Ejercicio 16")

function saludar(nombre) {
    return `Soy ${nombre}`;
}
function calcularEdad(añoNacimiento, añoActual) {
    return añoActual - añoNacimiento;
}
function presentar() {
    let nombre = prompt("Ingrese su nombre:");
    let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
    let añoActual = new Date().getFullYear(); 
    let edad = calcularEdad(añoNacimiento, añoActual);
    let saludo = saludar(nombre);
    alert(`${saludo}. Tengo ${edad} años.`);
}

presentar();

