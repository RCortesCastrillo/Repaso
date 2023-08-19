var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());//aurelio de rosa 

var test = obj.prop.getFullname;
// es como si tuvieramos 
// var test =function () {
//     return this.fullname;

// y como no tenemos esa porpiedad en el objeto global por eso mismo
// nos da undefined el ultimo console.log

console.log(test());
