//Ambas formas sirven para crear el mismo  objeto
let obj = {}
let obj2 = new Object()

/**
 * Contructoes de los valores
 * new Array();[]
 * new String():'' o ""
 * new Number();12
 * new Boolean();true o false
 * new Object();{}
 */

//Ejemplo de diferencias entre el valor de un literal y un constructor
const s1= '1+1'
const s2= new String('1+1')
console.log(s2.valueOf())//Para imprimir el dato de una variable como literal si se hizo con constructor
