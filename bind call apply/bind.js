
// bind call apply son metodos de las funciones que nos ayudan a vincular una funcion con un objeto 



function info(){
    console.log(this)
}

let auto = {
    modelo:'Modelo 3', 
    año: 2021,
    marca: 'Tesla',
    
    }



info.bind(auto)();
