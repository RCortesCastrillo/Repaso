function saludar( saludo ){
    return function( nombre ){     
      console.log(saludo + ' ' + nombre);
    }
  }
  
  var saludarHola = saludar('Hola'); // Esto devuelve una función
  /*
  Luego, se crea una variable saludarHola y se le asigna el resultado de llamar a saludar('Hola'). Esto significa que saludarHola se convierte en la función anónima retornada por saludar con el saludo 'Hola' predefinido.*/
  saludarHola('Toni'); // 'Hola Toni'



  /*
  Finalmente, se llama a saludarHola('Toni'), lo que invoca la función anónima que se almacena en saludarHola. La función toma el parámetro nombre y combina el saludo 'Hola' (que se estableció cuando se creó saludarHola) con el nombre 'Toni' que se pasó como argumento. Luego, imprime 'Hola Toni' en la consola.

En resumen, el uso de closures en este caso permite que la función anónima interna conserve el contexto y las variables de la función externa (saludar), incluso después de que la función externa haya terminado de ejecutarse. Esto es lo que permite que saludarHola('Toni') pueda acceder al saludo 'Hola' que se estableció anteriormente cuando se creó saludarHola */

