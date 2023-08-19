function miFuncion(){
    
    console.log(x);
    let x=10
}


miFuncion()


// como podemos darnos cuenta la consola nos da error ya que la variable 
// se quedo con el valor de undefined en el proceso del hoisting 
// ya que desde el lexicaal envirotmen la variable ya existia pero
//cuando se ejecuto el console.log la variable 'x' no tiene ningun valor
// asignado.ya que la asignacion esta despues del console.log
