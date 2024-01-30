//Aprendiendo POO
//Creacion de un objeto para un usuario
let user={
    email:'example@gmail.com',
    name : 'Memo',
    direction : {
        provincia:'Cartago',
        distrito:'Quebradilla',
        pueblo:'Copal'
    },
    activo:true,
    //Asignacion de una funcion a un objeto
    recuperarClave : function(){//Esta funcion anonima se crea sin nombre debido a que el id de  la prpiedad ya indica lo que hace
         console.log('Recuperando Clave...')
    }
}

user.recuperarClave()