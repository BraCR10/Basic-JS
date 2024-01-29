/**
 * crear algoritmo que tome un array de objetos
 * y devuelva un array de pares(id,objeto)
 */
let array=[{
    id : 1,
    name:'Nicolas'
},{
    id : 2,
    nombre:'Felipe'
},{
    id : 3,
    nombre:'Chanchito'
}]

function toPairs(arr){
    let tempArr=[]
    for (i in arr){
        tempArr.push([arr[i].id,arr[i]])}
    return tempArr
}

/*Si usar push
function toPairs(arr){
    let pairs = []
    for (idx in arr){
        let element = arr[idx]
        pairs[idx]= [element.id, elements]
    }
    return pairs
}*/

let result= toPairs(array)
console.log(result)


