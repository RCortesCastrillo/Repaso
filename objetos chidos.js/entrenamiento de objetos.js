// let objeto = {
// numero: 1,
// texto: 'texto',
// lista: [],
// boolean:true,
// objeto: {objeto2:'hola'}

// } 
// //  
// // console.log(objeto['objeto']['objeto2'])
// console.log(objeto)


var persona = {nombre:'Lucas',
   edad:26 ,
   estudios:{ esProgramador: true },
   papito:function(){
    console.log('hello beautifully word ')
   }
}

persona.nombre= 'Martin'
persona.edad=321

persona.patitofeo = [1,2,3,4,5,6]
delete persona.edad
console.log(persona)
persona.papito();