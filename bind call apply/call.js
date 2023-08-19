function info(){
    console.log(this)
}

let auto = {
    modelo:'Modelo 3', 
    año: 2021,
    marca: 'Tesla',
    
    }



// info.call(auto);

// la diferencia es que bind no corre la funcion,nosotros tenemos que llamar a la funcion 

// y call hace exactamente lo mismo sin tener que llamar o correr la funcion 



// CALL CON OTRO ARGUMENTO 


function info(a){
    console.log(this,a)

}

let auto2 = {
    modelo:'Modelo 3', 
    año: 2021,
    marca: 'Tesla',
    
    }



info.call(auto2,5665);