//  aqui usamos el bucle for in

let atuendos = {manos:'guantes',pies:'zapatos',cabeza:'gorra'}
for(let prop in atuendos){
    console.log('esta es la propiedad: '+ prop)
    console.log( 'este es el valor: ' + atuendos[prop])
}


// console.log(atuendos['manos'])
// bucle for sirve unicamente para recorrer arreglos
// bucle for in sirve unicamente para recorrer objetoss