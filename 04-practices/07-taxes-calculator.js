/**
 * Crear algoritmo que devuelva el precio del producto
 * mas impuestos que son un 15% del precio
 */

function totalPrice(price,taxes){
    return Math.round(price+(price*taxes))
}
let price = totalPrice(19.90,0.15)
console.log('El precio mas impuestos es de '+price)
