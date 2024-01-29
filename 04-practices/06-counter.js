/**
 * Crear algoritmo que de la cantidad de numeros 
 * positivos en el array
 */
let  array = [2,5,7,15,-5,-100,55]
function numCounter(arr){
    let sum=0
    for (i of arr){
        sum=i>=0?sum+=1:sum+=0}
    return sum}
let sum = numCounter(array)
console.log('El array tiene ',sum,' numeros positivos')