function info(a){
    console.log(this,a)

}

let auto2 = {
    modelo:'Modelo 3', 
    año: 2021,
    marca: 'Tesla',
    
    }



info.apply(auto2,[11]);

// apply es exactamente igual que call pero con la diferencia de que
// pasamos los argumentos en un array 





// todo esto sirve por si quieres utilizar metodos y utilizarlos sobre diferentes objetos 
// Y asi no tienes que repetir los metodos en cada uno de ellos 

// simplemente declaras el metodo afuera y lo vinculas con tu objeto 



// los objetos que utilizamos los tenemos que escribir manualmente y lleva mucho tiempo 



/*EXISTE UNA FORMA DE HACER ESTO Y ES MUCHO MAS RAPIDO 
Y ES CREANDO UN TIPO DE PLANTILLAS PARA CREAR OBJETOS 

ES DECIR FUNCIONES QUE SE ENCARGUEN DE GENERAR OBJETOS QUE TNEGAN LA FORMA ANATERIOR */

