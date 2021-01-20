// OBJETOS CON DOT NOTATION

let persona = {
    nombre: "Mike",
    edad:25,
    musicaFavorita:"salsa"
}

/*let nuevoNombre = persona.nombre; //=>"Mike"
let nuevaEdad = persona.edad
let nuevaMusica = persona.musicaFavorita


console.log(`Hola ${nuevoNombre}`)*/

//1. DESTRUCTURING OBJECTS

let { nombre, edad, musicaFavorita = "Rock", pais = "México"} = persona;

console.log(`Hola ${nombre}`)

//ejemplo

let automovil = {
    llantas: 4,
    puertas: 3,
    marca: Toyota
}

let {llantas, puertas, marca} = automovil;

console.log(`Cuantas llantas tiene ${llantas}`)
console.log(`Cual es el número de puertas? R: ${puertas}`)

//ejercicio

const data = {
        name: {
          firstName: "ana",
          lastName: "marino",
        },
        isStudent: true,
        favoriteFootballTeam: "fc barcelona",
        hometown: {
          city: "buenos aires",
          country: "argentina",
          food: {
              breakfast: "meat and eggs"
          }
        },
      };
      let {name: {firstName, lastName}, favoriteFootballTeam, hometown: { city, country, food: { breakfast } } } = data
      console.log(data)
      console.log(firstName)
      console.log(lastName)
      console.log(city)
      console.log(country)
      console.log(breakfast)

    console.log(`El nombre es ${firstName} ${lastName} su ciudad es ${city} en el país ${country} y su club es ${favoriteFootballTeam}`)


let empresa = {
    nombre:"Samsung",
    multinacional: true,
    empleados:100000
}

const campuses = ["Madrid", "Barcelona", "Miami"]

const[firstCampus, secondCampus, thirdCampus] = campuses
console.log(firstCampus)


const menu = ["Huevos", "Chilaquiles", "Enchiladas", "Molletes"]
const[desayuno1, desayuno2, desayuno3, desayuno4] = menu

console.log(desayuno2)


//SPREAD OPERATOR

const reptiles = ["snake", "lizzard", "alligator"]
const mammals = ["puppy,","kitty"]


const software= ["excel", "word", "PPT"]
const hardware = ["laptop", "mouse", "teclado"]

const equipo = [...software, ...hardware]

console.log(equipo)


const mamiferos = [...mammals]

//REST OPERATOR

//cuando no tengo ideas de cuantos argunmentos voy a usar
const suma = (...valores) => {

    const sumaTotal = valores.reduce((sum,valorActual) => {
        return sum + valorActual
    } )

    return sumaTotal
 }

//DESTRUCTURACION DIRECTA EN PARMETROS DE UNA FUNCION
function getFullName(user) {
    return `${user.firstName}`
} 



 function getFullName({firstName, lastName}) {
     return `${user.firstName} ${user.lastName}`
 }

suma(3,4,15,25,33)

/*



*/


const reservaHotel = {
    nombreHuesped: "Diego",
    tipoPago: {
        tarjetaCredito: true,
        payPal: false
    },
    transportacion: {
        personas: 4,
        oringenDestino: {
            origen: "aeropuerto",
            destino: "hotel"
        },
        incluyeTour: null
    }
}

let  {nombreHuesped,tipoPago: {tarjetaCredito,payPal}, transportacion:{personas,oringenDestino:{origen,destino}, incluyeTour}} = reservaHotel

console.log (`El huesped ${nombreHuesped} tiene transportacion a ${destino} pago con ${tarjetaCredito ? "Si" : "No"}}`) // ? es para booleanos con desicion

//notas examen inciso 10
// let arrayNum = [
//   [96,15,25],
//   [57,65,75],
//   [66,77,88],
//   [23,654,55]
// ]

// function maxTwoDimArray(matrix) {
//   let numMayorE = matrix.map(e=> Math.max(...e))
//   let numMayorsote = Math.max(...numMayorE)
//   console.log(numMayorsote)
// }

// maxTwoDimArray(arrayNum)

//SINCRONA

console.log("MEnsaje 1")
console.log("Mensaje 2")
console.log("MEnsaje 3")

//ASINCRONA
//ORDENAR Y ME LLEVAN LA COMIDA
//MIENTRAS LLEGA LA COMIDA, LAVAR LOS PLATOS
//ORGANIZO EL CUARTO (LA COMIDA AUN NO HA LLEGADO)
//LA COMIDA LLEGO


//ejemplo sincrono
const getFirstElementOfArray = () => {
    return [0]
}
const firstElement = getFirstElementOfArray(array)
console.log(firstElement)

//ASINCRONO
function readFile (file) {
    return contentFile.length
}

const textSize = readFile('odyssey.txt');
console.log(textSize)

//1)setTimeout Ejecutar la funcion despues de un perido


const despertardor = setTimeout(() => {
    console.log("ESto se ejecuto en tres segundos")
},15000)   //3000 milisegundos

//2.setInterval
let counter = 0
const counter = setInterval (() => {
    console.log(counter)
    conunter+=1
}, 2000)

let counter = 0
const conteo = setInterval(() => {
  console.log(counter)
  counter += 1
  if(counter === 2){
    clearTimeout(conteo)
  }
}, 2000)


//ejercicio
const aprturaDeEntrada = setTimeout(() => {
    console.log("Ya puedes accesar")
}, 2000)

cuentaRegresiva = 5
const contarReversa = setInterval(()=>{

  cuentaRegresiva-=1
  console.log(cuentaRegresiva)
},2000)

//ejercicio

const sumarNumero = (a,d) => {
    a=10
    d=sumarLetraD
    return (a+d)
}

const sumarLetraD = (b,c) => {
    d = b+c 
    return d
}