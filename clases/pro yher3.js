class Latinoamerica{
    constructor(){
        this.paises=[]
    }
    
}


Latinoamerica.prototype.agregarPais=function(pais){
    this.paises.push(pais)

}

var continente = new Latinoamerica();
continente.agregarPais('Mexico')
console.log(continente.paises)