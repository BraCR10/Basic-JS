/**
 * Crear array de longuitud N, y que sus
 * elementos sean numeros de 1 hasta N
 */

let lenght=-1
function arrayCreator(n){
    let newArr=[]
    while (n>0){//Se evita la validacion de que el num sea menor o igual que 0
        let elem=newArr[n-1]
        newArr[n-1]=n
        n--
    }
    return newArr
}
let result = arrayCreator(lenght)
console.log(result)