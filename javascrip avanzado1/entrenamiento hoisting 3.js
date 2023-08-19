var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }

   return snack+' patatas firtas';
}

console.log(getFood(false))



/* explicacion del porque da undefined


Aquí está el flujo correcto:

Se declara una variable snack y se le asigna el valor 'Meow Mix'.

Se define la función getFood con su propio ámbito.

Dentro de la función getFood, se declara una nueva variable snack usando var y se le asigna el valor 'Friskies' solo si la condición if (food) se cumple. Esta nueva variable snack en realidad es local para el ámbito de la función getFood.

Luego, fuera del bloque condicional, pero aún dentro de la función getFood, se intenta retornar el valor de la variable snack. Sin embargo, dado que la condición if no se cumple cuando se llama a la función con getFood(false), la variable snack local nunca se inicializa, lo que resulta en undefined.

La función getFood devuelve undefined debido a que la variable snack local nunca recibió un valor cuando la condición no se cumplió.

En resumen, debido a la declaración de la variable snack dentro de la función getFood usando var, la variable local se declara en ambos caminos (dentro y fuera del bloque condicional), pero solo se inicializa dentro del bloque condicional cuando la condición se cumple. Por lo tanto, cuando la condición no se cumple, la variable local no se inicializa y su valor es undefined.
*/




