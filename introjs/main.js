//  Ejercicio 1
console.log("Ejercicio 1")
const myName = "leonel"
console.log(myName)
//  Ejercicio 2

console.log("Ejercicio 2")
const lastName = "Borjas"
console.log(lastName)

//  Ejercicio 3
console.log("Ejercicio 3")
const myAge = 22
console.log(myAge)

//  Ejercicio 4
console.log("Ejercicio 4")
const myPet = "Meno"
console.log(myPet)

//  Ejercicio 5
console.log("Ejercicio 7")
const petAge = 1
console.log(petAge)

//  Ejercicio 6
console.log("Ejercicio 6")
const fullName = "Leonel Borjas"
console.log( myName + " " + lastName)

//  Ejercicio 7
console.log("Ejercicio 7")
const presentationText = `Hey! My name is ${fullName}, I am ${myAge} years old; I have a pet named ${myPet} and he's ${petAge} years old;`
console.log(presentationText);

//  Ejercicio 8
console.log("Ejercicio 8")
const sumAges = myAge + petAge
console.log(sumAges)
const resAges = myAge - petAge
console.log(resAges)
const productAges = myAge * petAge
console.log(productAges)
const divisionAges = myAge / petAge
console.log(divisionAges)

//  Ejercicio 9
console.log("Ejercicio 9")
let estudiantes = {
    name: "Maluma",
    lastName: "Baby",
    ages: 40,
    grade: 5,
    alcoholic: true,
    bully: true, }

console.table(estudiantes)

//  Ejercicio 10
console.log("Ejercicio 10")
let pet = {
    name: "Tawi",
    lastName: "Lejia",
    ages: 21,
    cute: true,
    obedient: false, 
    hygienic: false, }

console.table(pet)

//  Ejercicio 11
console.log("Ejercicio 11")
let frutas = ["papa", "cebolla", "tomate", "kiwi", "limon"]
console.log(frutas)

//  Ejercicio 13
console.log("Ejercicio 13")
let numbers = [ 1, 2, 3, 4, 5]
console.log(numbers)

//  Ejercicio 14
console.log("Ejercicio 14")
let family = [ "Mom", "Dad", "Uncle", "Brother", "Sister"]
console.log(family)

//  Ejercicio 15
console.log("Ejercicio 15")
let ramdomText = `${frutas[1]} ${numbers[3]} ${family[0]}`;
console.log(ramdomText)

//  Ejercicio 12
console.log("Ejercicio 12")
let age = prompt("Please enter your age");
let iamAdult = age >= 18;
if (iamAdult) {
    console.log("I am an adult.", iamAdult); }
else {
    console.log("Im not an adult.", iamAdult); }