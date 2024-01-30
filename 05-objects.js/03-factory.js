function newUser(email,name){
    return {
    email,//No se asigna porque en los parametros de la funcion esta escritos igual
    name,
    activo:true,
    //Asignacion de una funcion a un objeto
    recuperarClave : function(){//Esta funcion anonima se crea sin nombre debido a que el id de  la prpiedad ya indica lo que hace
         console.log('Recuperando Clave...')
    }}
}

//Creancion de un usuario usando la funcion
let user1 = newUser('Brian','example@gmail.com')
let user2 = newUser('Thor','thor@gmail.com')

console.log(user1,user2)