Array.prototype.mayoresQueTres=function(){
    let arregloModicificado=[]

    for(let i=0;i<this.length;i++){
        if(this[i]< 3){arregloModicificado.push(false)}
        else{arregloModicificado.push(this[i])}
    }
    return arregloModicificado
}


let mispatas=[2,5,5,5,5,5,9,98,4,1,2,3,6,8,88]

console.log (
mispatas.mayoresQueTres())

//podemos crear nuestsros metodos para crear lo que queramos 