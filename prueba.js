


//  String.prototype.reverse = function(){
 
//     var cadenaSeparada= this.split('')
 
//     var inverteirArray= cadenaSeparada.reverse();
 
//     var UnirArreglo= inverteirArray.join('')
 
//     return UnirArreglo
 
    
//  }

//  let papapit='mi abuelito el pedirto '

//  let elGordo= papapit.reverse()

//  console.log(elGordo)
 
class Persona {
    // Crea el constructor de la clase "Persona".
    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
    // sus valores.
 
 
    constructor(nombre,apellido,edad,domicilio ){
       this.nombre = nombre
       this.apellido =apellido
       this.edad = edad
       this.domicilio = domicilio 
    }
 


    detalle(){return new Persona (this.nombre + this.apell)}
 
 }