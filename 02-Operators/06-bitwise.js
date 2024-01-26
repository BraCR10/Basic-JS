// bit : 0 1
// Bite: 8 bits
//Byte 00000000 -> 0
//Byte 00000001 -> 1
//Byte 00000010 -> 2
//Byte 00000011 -> 3
// ......

//El bitwise juega con los 1s y 0s, se activa con un | o &
//Esto pasa porque OR permite que si hay un 0 y un 1 el nuevo binario se queda con el 1
console.log(1 | 2)//El binario que queda es el de 3
//Byte 00000001 -> 1
//Byte 00000010 -> 2

console.log(1 | 5)//El binario que queda es el de 5
//Byte 00000001 -> 1
//Byte 00000101 -> 5


//Esto pasa porque AND exige en ambos binarios un 1 para dar un 1
console.log(1 & 2)//El binario que queda es el de 0
//Byte 00000001 -> 1
//Byte 00000010 -> 2

console.log(1 & 5)//El binario que queda es el de 1
//Byte 00000001 -> 1
//Byte 00000101 -> 5