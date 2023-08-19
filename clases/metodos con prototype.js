function Auto(modelo,año,marca){
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
    
  }
//una ves que identificamos el prototipo de auto podemos asignar cualquier metodo 
// a este prototipo y de esta manera todos los objetos auto tendran acceso a esa funcion 
// o podriamos añadir un metodo que es lo que hacemos en el siguiente ejemplo 
Auto.prototype.info=function (){
    return this.modelo + ' - '+ this.marca + ' - '+ this.año
}




  let auto12= new Auto('el crak',99,'el pelon')

  console.log(auto12.info())