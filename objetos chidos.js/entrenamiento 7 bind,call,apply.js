

function info(){
    console.log(this)
}

let auto = {
    modelo:'Modelo 3', 
    año: 2021,
    marca: 'Tesla',
    info:info
    }



auto.info()



//la vinculacion implicita es la que se da naturalmente 