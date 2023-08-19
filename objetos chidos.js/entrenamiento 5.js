

// atuendos.papi()

    // this.modelo=5;
    // this.año=99
const info= () => {return  'Estes es un auto ' + this.marca + ' , '  
    + this.modelo + ' del año ' + this.año }

let auto = {
    modelo:'Modelo 3',
    año: 2021,
    marca: 'Tesla',
    info: info 
};

// function info (){
//     return 'Estes es un auto ' + this.marca + ' , '  
//     + this.modelo + ' del año ' + this.año;
// }

console.log(auto.info())
