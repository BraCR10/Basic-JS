//Las funciones tambien son objetos
function Usuario(nombre){
    this.nombre=nombre
}
//tambien tiene propiedades con cualquier objeto
console.log(Usuario.length)

//Tambien se pueden asignar a otras varibles o constantes
let user=new Usuario('Brian')
console.log(user)

//Tambien se pueden pasar como argumentos a otras funciones
function fun(Fn,arg){
    return new Fn(arg)
}

let user1=fun(Usuario,'Brian')
console.log(user1)