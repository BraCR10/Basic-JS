//short-circuit 

/**
 * Valores en falso
 * false
 * 0 
 * ''
 * null
 * undefined
 * NaN -En caso de una operacion matematica no tenga resultado
 */
let name = 'Brian'
let username = name && 'Anonimo'
console.log(username)

//Esto en funciones
function fn1(){
    console.log('soy funcion 1')
    return false
}
function fn2(){
    console.log('soy funcion 2')
    return true
}

let x = fn1() && fn2()//Si ambos son verdaderos, && envia ambos.
//Si uno es verdadero y otro falso, && envia solo el primero
let y = fn1() || fn2()//Si ambos son verdaderos, || envia el primero. 
//Si uno es verdadero y el otro es falso, || envia ambos 