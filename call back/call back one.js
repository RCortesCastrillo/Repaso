// los callbacks son realmente funciones que son al mismo tiempo argumentos 
/* y que son llamados por una funcion */


function llamar(ack,a){
    ack(33+a )
}


llamar(console.log,200)