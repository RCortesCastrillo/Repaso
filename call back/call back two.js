// callbacks

/* tipo de funciones que se pasan por parametro a otras funciones

supongamos que tenemos una funcion 1 que pasa por parametro a una funcion 2

cunado la funcion 1 ejecuta a la funcion 2 se produce un proceso llamado callback


son muy utiles porque nos aseguran que una funcion  se va a ejecutar hasta  que 
se complete una tarea */


var devuelvoUsuario = function(){
    return 'camilo';
}



var devuelvoSaludo = function(){
    return 'hola';
}


var saludar = function (cb1,cb2){
    return cb1() + ' ' + cb2();
}

var resultado = saludar(devuelvoSaludo,devuelvoUsuario)

console.log(resultado)