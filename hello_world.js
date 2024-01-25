//Comentario una linea

/*
Comentario varias lineas
*/

//Print
console.log('Hello world')

//Variables con CamelCase
var myFirstVar = "Hi, it's my first variable on JS"
console.log(myFirstVar)

let myFirstVar2 = "Hi, it's my first variable on JS with let"
console.log(myFirstVar2)

//JS nos es tipado, se puede cambiar el tipo de dato facilmente
let mySecondVar3 = "Hi, it's my second variable on JS with let"
console.log(typeof mySecondVar3)
mySecondVar3 = 2
console.log(typeof mySecondVar3)
console.log(myFirstVar2)

//Se puede mezclar datos en un solo print
console.log(myFirstVar2+' '+mySecondVar3)

//Variable con bool
let myBool=false
myBool=true
console.log(myBool)

//Constantes
const LA_CONST = 'This is a const' //De esta manera se pone el nombre de una constante
console.log(LA_CONST)

//Null se usa para indicar un valor nulo en las variables
let varNull = null
console.log(varNull)

//Condicionales o control de flujo
let var1= 1
if (var1>1){
    console.log('Var1 es mayor a 1')
}else if (var1<1){
    console.log('Var1 es menor a 1')
}else{console.log('Nose que paso')}

//Funciones

function myFunction(){
    console.log('Estas usando una funcion')

}

myFunction()

//Listas
let myList = ['pinaapple', 'orange', 'banana']
console.log(myList)

//Set 

let mySet = new Set( ['pinaapple', 'orange', 'banana', 'banana'])// No imprime repedios
console.log(mySet)

//Mapas o diccionarios

let myMap = new Map([[1,'Uno'], [2, 'Dos']])
console.log(myMap)
console.log(myMap.get(1))

//Bucles
for (let value  of mySet){
    console.log(value)
}

i=0
while(i<5){
    console.log(i)
    i+=1
}

//Clases para POO
class MyClass{
    
    constructor(name,age){
        this.name =name
        this.age = age
    }

}
let myClass = new MyClass('Carlos',16)
console.log(myClass)

//Enum
const MyEnum = {
    GATO:'Miau',
    PERRO:'Guau',
    DRAGON:'RAAAAAAAH'
}
const myEnum = MyEnum.DRAGON
console.log(myEnum)