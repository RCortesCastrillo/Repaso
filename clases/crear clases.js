let auto1 = {
  modelo:'Modelo 3',
  año: 2021,
  marca: 'Tesla'
}

let auto2 = {
    modelo:'Hummer EV',
    año: 2022,
    marca: 'GMC'
  }
// vamos a crear clases de la manera antiguita 

  function Auto(modelo,año,marca){
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
  }

  let auto12= new Auto('el crak',99,'el pelon')

  console.log(auto12)