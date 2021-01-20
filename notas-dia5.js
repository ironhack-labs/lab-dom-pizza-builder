/* OPP
ENCAPSULAMIENTO  
HERENCIA

/* al crear una clase
class Animal
    |   
    ====> let this = {}

*/
class SerVivo {
    //PROPIEDADES
    constructor(movimiento) {
        this.movimiento = `$El movimiento es ${movimiento}`
    }

    //METODOS - COMPORTAMIENTOS
    respirar() {
        console.log("esta respirando")
    }

}

class Animal extends SerVivo {
    //PROPIEDADES
    constructor(name, dometic, movimiento) {
        super(this.movimiento)
        this.patasNumero = 4;
        this.especie = mamifero;
        this.color = "blanco con negro";
        this.nombre = name;
        this.dometico = domestic;
        this.manchas = 0
    }

    //METODOS > cuando nos estamos refiriendo a la funcion de una clase.. la funcion es algo fuera de la clase
    correr (ambiente) {
        console.log("Esta corriendo")
        if(ambiente === "Sabana") {
            console.log("Esta corriendo rapido porrque esta en la sabana")
        } else {
            console.log("Esta corriendo normal")
        }
    } 
      
    crearManchas (numeroDeManchasACrear) {
        this.manchas = this.manchas + numeroDeManchasACrear
    }

}

//INSTANCIAMIENTO
const cebra = new Animal("Rayitas", false )
console.log(cebra)

/*Animal {
  patasNumero: 4,
  especie: 'mamifero',
  color: 'blanco con negro',
  nombre: 'Raytias',
  domestico: false
}*/

const vaca = new Animal("Alpura", true)
console.log(vaca)

/*Animal {
  patasNumero: 4,
  especie: 'mamifero',
  color: 'blanco con negro',
  nombre: 'Raytias',
  domestico: false
}*/

//Aqui se crean las primeras 10 manchas
cebra.crearManchas(10)
console.log(cebra)
/*Animal {
  patasNumero: 4,
  especie: 'mamifero',
  color: 'blanco con negro',
  nombre: 'Rayitas',
  domestico: false,
  manchas: 10
}*/

//Aqui se suman 60 manchas
cebra.crearManchas(60)
console.log(cebra)
/*Animal {
  patasNumero: 4,
  especie: 'mamifero',
  color: 'blanco con negro',
  nombre: 'Rayitas',
  domestico: false,
  manchas: 70
}*/

/*Está respirando
Animal {
  movimiento: 'El movimiento es Si',
  patasNumero: 4,
  especie: 'mamifero',
  color: 'blanco con negro',
  nombre: 'Rayitas',
  domestico: false,
  manchas: 55
}*/



//EJEMPLO

class CampingEquipo {
    constructor(dificultad,temporada) {
        this.dificultad = dificultad;
        this.agua = "3L"
        this.luz = ["linterna","cerillos","vela"]
        this.proteccion = ["chamarra","gorro","botas"]
        this.temporada = temporada;
    }
    
    }
const cliente1 = new Animal("básico", "primavera")
console.log(cliente1)


//EJEMPLO

class CuentaBancaria {
    constructor(name,idClient,amtDeposit,amtWithdrawl) {
        this.nombre = name;
        this.idClient = idClient;
        this.actValue = 0;
        this.Deposit = amtDeposit;
        this.Withdrawl = amtWithdrawl
    }

    

    depositarDinero (amtDeposit) {
        this.actValue += amtDeposit
        
    }
}

const client1 = new CuentaBancaria("diego","123",100,0)
console.log(client1)

client1.depositarDinero(200)
console.log(client1)