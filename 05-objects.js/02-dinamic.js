const user = {id:1}//A los constantes tambien le podemos cambiar,agregar o quitar atributos de un objeto o elemntos de un array
user.name='Brian'//Agrrgando una propiedad o atributo
user.guardar=function(){//Agregando una propiedad la cual es una funcion.
    console.log('Guardando ', user.name)
}
user.guardar()

delete user.name // Eliminando una propiedad
console.log('\n',user)

//Objetos bloqueados totalmente
const user2 = Object.freeze({id:24})
user2.name='Brian'
console.log('\n',user2)

//Objetos  modificables pero no se puese agragar mas propiedades
const user3 = Object.seal({id:24})
user3.id=1
console.log('\n',user3)

