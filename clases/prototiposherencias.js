/* prototipo
mecanismo por el cual todos los objetos o elementos de javascript pueden extender sus propiedades 
y metodos */



// ejemplo 

// sabemos que existe un tipo de dato Array que proviene de un objeto global llamado Array 
// este objeto global le extiende meidante su prototipo propiedades  metodos  al tipo de datos Array 


/* Este proceso en el que los objetos globales de javascript le extienden metodos y propiedades a cualquier tipo de dato  
se denomina herencia */ 

function Padre(nombre,apellido, soy ){
    this.nombre = nombre
    this.apellido = apellido
    this.soy = soy 
}

Padre.prototype.saludo= function(){
console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`)
}

//alt + 96 para tilde al reves 


function Hijo (nombre,apellido,soy,tengo ){
    //vamos a incluir al padre que es una funcion y vamos a llamar esta funcion  
    // desde dentro del hijo con el conntexto del hijo 
    // el metodo call nos permite pasar otras propiedades 

    //heredamos las propiedades y metodos de las plantillas pero no de los valores  

    Padre.call(this,nombre,apellido,soy)
    this.tengo =tengo 
    // this.nombre = nombre
    // this.apellido = apellido
    // this.soy = soy  
}

Hijo.prototype = Padre.prototype;

const padre= new Padre('Ramon','Cortes','El PAPi')
const hijo = new Hijo('Raulin',padre.apellido,'el chaval',23)

// console.log(padre)
// console.log(hijo) 
hijo.saludo()
