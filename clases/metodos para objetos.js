
// esta es la forma viejita de poner metodos en objetos 
function Auto(modelo,año,marca){
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
    this.info= function(){
        console.log('mis chetos naranjas') 
    }
  }

  let auto12= new Auto('el crak',99,'el pelon')

  console.log(auto12.info())