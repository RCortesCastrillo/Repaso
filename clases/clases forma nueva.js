
  

  
  class Auto {
    constructor(modelo,año,marca){
        this.modelo = modelo;
        this.año = año;
        this.marca = marca;
    }


    info(){
        return this.modelo + ' - '+ this.marca + ' - '+ this.año}
  }


let auto12= new Auto('el crak',99,'el pelon')

// console.log(auto12.info())
console.log( Auto.info())