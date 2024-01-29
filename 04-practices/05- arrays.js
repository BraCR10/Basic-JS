/**
 * Codigo que devuelva el numero menor y mayor de una array
 */
let array = [2,5,7,15,-5,-100,55,100000000]
function getMinorMayor(arr){
    //Con ternarios y bucle
    let minor=null;//Otra alternativa es poner arr[0] en lugar de null
    let mayor=null;//Otra alternativa es poner arr[0] en lugar de null
    for (i of arr){
        minor=minor<i ? i : minor
        mayor=mayor>i ? i : mayor}
    /*Con if y bucle
    let minor;
    let mayor;
    for (i of arr){
        if(i<minor)
            minor=i
        if(i>mayor)
            mayor=i }*/

    return [minor, mayor]//Cuando se tenga que enviar varios datos, retornar un array
}

let numbers = getMinorMayor(array)
console.log('El mayor es ',numbers[0],' y el menor es ', numbers[1])