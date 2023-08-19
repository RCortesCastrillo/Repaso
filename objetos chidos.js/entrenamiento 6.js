
this.marca = 77

const info = () => {console.log(this)}

let auto = {
    modelo:'Modelo 3', 
    año: 2021,
    marca: 'Tesla',
    info:info 
};

// function info (){
//     console.log(this)
// }

auto.info()