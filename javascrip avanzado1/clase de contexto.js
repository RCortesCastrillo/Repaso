// el contexto global es el contexto donde esta sucediendo todo 
// el marco donde se van a dar estas ejecuciones 


var x =10

//esta es una variable global  ya que no se encuntra dentro de ninguna funcion 

function foo (){
    var y=20
    console.log(x)
console.log(y)
}

 



//la variable 'y' esta dentro de una funcion esta dentro del contexto de funcion 

//si llamamos la funcion nos da los resultados de cada uno 

console.log(x)
console.log(y)


// si ponemos el console.log por afuera nos podemos dar cuenta 
/*que el console no encuentra a 'y' porque esta dentro del contexto de function*/ 