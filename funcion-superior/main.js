//  Ejercicio 1
console.log("Ejercicio 1");
const imprimirMensaje = (mensaje) => console.log(mensaje);

//  Ejercicio 2
console.log("Ejercicio 2");
let crearMultiplicacion = (numero1, numero2) => numero1 * numero2;

//  Ejercicio 3
console.log("Ejercicio 3");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let array2 = array.map(crearMultiplicacion);

console.log(array2);

//  Ejercicio 4
console.log("Ejercicio 4");
function cervezasAlcoholicas(beers) {
const filtroCervezas = beers
    .filter((beer) => beer.abv)
    .toSorted((a, b) => b.abv - a.abv)
    .slice(0, 10);
    return filtroCervezas;
}
const cervezasFiltradas = cervezasAlcoholicas(beers);
console.log(cervezasFiltradas);

//  Ejercicio 5
console.log("Ejercicio 5");
const top10BebidasBajas = beers.sort((a, b) => a.abv - b.abv).slice(0, 10);
console.log(top10BebidasBajas);

//  Ejercicio 6
console.log("Ejercicio 6");
function nombreCerveza (beers, nombre){
    const buscarCerveza = beers.find((beer)=> beer.name === nombre)
    if (buscarCerveza){
        return buscarCerveza
    }
}

console.log (nombreCerveza(beers, "Rabiator"))

//  Ejercicio 7
console.log("Ejercicio 7");
function cervezaPorIbu (beers, valor){
    const buscarCervezaPorIbu = beers.find((beer)=> beer.ibu === valor)
    if (buscarCervezaPorIbu){
        return buscarCervezaPorIbu
    } else{
        return `No existe cerveza con ibu de ${valor}`
    }
}

console.log (cervezaPorIbu (beers, 41.5))


//  Ejercicio 8
console.log("Ejercicio 8");
function cervezaPorParametro (beers, nombreId){
    const devolverCervezaArray = beers.findIndex((beer)=> beer.name === nombreId)

    if(devolverCervezaArray !== -1){
        return devolverCervezaArray
    } else {
        console.log (`${nombreId} no existe`)
    }
}
const cervezaBuscar = "Cerveza Corona"
const indexCerveza = cervezaPorParametro (beers, cervezaBuscar)
    if (indexCerveza !== -1){
        console.log (`La cerveza "${cervezaBuscar}" se encuentra en la posicion ${indexCerveza} del array`)
    }

//  Ejercicio 9
console.log("Ejercicio 9");
function cervezaFiltradaPorAmargoAlcohol (cervezas, alcohol){
    const filtro = cervezas.filter((cervezas) => cervezas.abv <= alcohol)
    const cervezasFiltradas = filtro.map((cervezas) => ({
        nombre: cervezas.name,
        alcohol: cervezas.abv,
        amargor: cervezas.ibu
    }))
    return cervezasFiltradas
}

const valorAlcohol = 6
const filtradoCervezas = cervezaFiltradaPorAmargoAlcohol (beers, valorAlcohol)
console.log (filtradoCervezas)

//  Ejercicio 10
console.log("Ejercicio 10");
function ordenarCervezas(cervezas, propiedad, booleano){
    let orden
    if (booleano){
        orden = 1
    } else{
        orden= -1
    }
    const cervezasOrdenadas = cervezas.toSorted((a, b) =>{
        if (a[propiedad] < b[propiedad]) return -orden
        if (a[propiedad] > b[propiedad]) return orden
        return 0
    })
    return cervezasOrdenadas.slice (0,10)
}

console.log(ordenarCervezas(beers, "abv", true))
//  Ejercicio 11
console.log("Ejercicio 11");
let tableHTML = document.querySelector("#table-body");

let createTableContent = (objeto) => {
return `
        <td class="border-2 border-black">${objeto.name}</td>
        <td class="border-2 border-black">${objeto.abv}</td>
        <td class="border-2 border-black">${objeto.ibu}</td>`;
};

let fragment = new DocumentFragment();

for (const iterator of beers) {
let tableRow = document.createElement("tr");
tableRow.className = "bg-green-400 text-center";
tableRow.innerHTML = createTableContent(iterator);
fragment.appendChild(tableRow);
}

console.log(fragment.textContent);

tableHTML.appendChild(fragment);
