/**
 * Indice validar que sea mayor a 0 y que el elmento este en el array
 */
function getIdx(arr,idx){
    if (idx<0 || idx >= arr.length)
        console.log('Indice no valido')
    else{
        console.log('El indice es ',arr[idx])
    }

}

let result = getIdx([1,5],0)