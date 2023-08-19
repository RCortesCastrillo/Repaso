var creaFuncion = function(){
    var arreglo = [];
  
    for ( var i=0; i < 3; i++){
      arreglo.push(
        function(){
          console.log(i);
        }
      )
    }
    return arreglo;
  }
  
  var arr = creaFuncion();
  
  arr[0]() 
  arr[1]() 
  arr[2]()


 /* En este caso, cuando se ejecuta creaFuncion(), el bucle for crea tres funciones anónimas y las agrega al arreglo 'arreglo'. Estas funciones están siendo definidas dentro de un cierre (closure), y comparten el mismo ámbito léxico, lo que significa que todas hacen referencia a la misma variable i que se encuentra en el ámbito de la función creaFuncion.
*/


