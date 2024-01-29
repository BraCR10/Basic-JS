//Para iterar dentro de un objeto
let user = {
    id:123,
    called:'Michael',
    age:18
}
for(let prop in user)//prop vale la coordena del dato en el array como  0,1,2,etc
    console.log(prop,user[prop])

