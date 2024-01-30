//Creacion de un constructor al objeto {id:1,recuperarClave=function(){}}
function User(){//Para un constructor siempre es UpperCamelCase
    this.id = 1;
    this.recuperarClave=function(){//Esto pasa a llamarse metodos cuando una funcion es asignada a la propiedad de un objeto. 
        console.log('reperando clave..')
    }
}

let usuario= new User()
console.log(usuario)