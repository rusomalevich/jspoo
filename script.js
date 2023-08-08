/*
console.log('Hola mundo')
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.trabajos = []
    }
    agregarTrabajo(trabajo){
        this.trabajos.push(trabajo)
    }   
}

const persona1 = new Persona('pepe', 'argento')

console.log(Persona)
*/
/* Crea la class proyecto con las sig propiedades
nombre: (p) string
precio: (p) numbrer
categoria: (p) string
duracionEstimada: (p) number
participantes: []
*/

/* 
Una vez creada la class proyecto se debera crear el metodo agregarParticipante ( participante)
A su vez crear la class Participante que tendra las propiedades (nombre, apellido, dinero (empieza en 0) y amigos (empieza en array vacio))
  */

class Proyecto {
    constructor(nombre, precio, categoria, duracionEstimada){
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.duracionEstimada = duracionEstimada
        this.participantes = []
    }
    agregarParticipante(participante){
        this.participantes.push(participante)
    }
}

class Participante {
    constructor(nombre, apellido, dinero){
        this.nombre = nombre
        this.apellido = apellido
        this.dinero = dinero
        this.amigos = []
    }
}

const proyecto1 = new Proyecto('Web', 350000, 'Autoadministrable', 60)
proyecto1.agregarParticipante(new Participante('Ezequiel', 'Glikman', 100))
console.log(proyecto1)
/*
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.trabajos = []
    }
    agregarTrabajo(trabajo){
        this.trabajos.push(trabajo)
    }
}
class Trabajo {
    constructor(nombre, tiempoEstimado, remuneracion){
        this.nombre = nombre
        this.tiempoEstimado = tiempoEstimado
        this.remuneracion = remuneracion
    }
    contarTrabajo(){
        console.log(`${this.nombre} me tomara un tiempo estimado de ${this.tiempoEstimado} hrs y recibire $${this.remuneracion}`)
    }
}
const persona1 = new Persona('pepe', 'argento')
persona1.agregarTrabajo(new Trabajo('desarrollar un front', 30, 230000))
console.log(persona1.trabajos[0].contarTrabajo())
*/

/*

/* 
Una vez creada la class proyecto se debera crear el metodo agregarParticipante ( participante)
A su vez crear la class Participante que tendra las propiedades (nombre, apellido, dinero (empieza en 0) y amigos (empieza en array vacio))


eliminarParticipante(nombre) el metodo eliminarParticipante recibe el nombre y elimina del array al participante

reestimarElProyecto(nueva estimacion) permitira cambiar el tiempo estimado del proyecto

nombrarParticipantes() por cada participante debera decir el nombre y apellido del participante

(Agregar la propiedad remuneracion al participante)
(Agregar el metodo a participante) pagar sueldo () incrementara su dinero por la remuneracion del participante

pagarSueldos() por cada participante activara el metodo pagar sueldo

  */

*/