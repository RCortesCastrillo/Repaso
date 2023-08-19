




// miFuncion()




// function miFuncion(){
    
    
//     let x=10
//     console.log(x);
// }

/* podemos observar que en las funciones es muy diferente ya que 
podemos ejecutar la funcion antes de que sea declarada 
ya que en el proceso de hoisting la funcion no es como las variables 
porque desde el proceso de creacion la funcion esta enterita
no como las variables que en primer instancia antes de la ejecucion toman
el valor de undefined */


/* para nosotros tiene mas sentido el que llamemos una funcion despues de que
es declarada pero en este lenguaje se puede llamar la funcion  antes de ser
declarada y de todas maneras funcionara de la misma manera */

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);//10
   console.log(a);// 8


   var f = function (a, b, c) {
      b = a;
      console.log(b);//8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);// ejecucion de C  
console.log(b);
console.log(x);