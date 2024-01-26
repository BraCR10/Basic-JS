//Personaje

let name
let anime 
let age 

let personaje = {
     name : 'Naruto Usumaki',
     anime : 'Naruto',
     age : '17'
     //lo que esta aqui adentro son propiedades 
} //Objeto literal

console.log(personaje)//todo el objeto
console.log(personaje.age)//solo una propiedad en especifico
console.log(personaje['age'])//solo una propiedad en especifico

//Cambiar una propiedad

personaje.age = 20
console.log(personaje['age'])//solo una propiedad en especifico

//Eliminar una propiedad
delete personaje.anime
console.log(personaje)//todo el objeto