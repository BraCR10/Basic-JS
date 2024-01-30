const punto = {
    x:10,
    y:15,
    dibujar:function(){
        console.log('Dibujando')
    }

}
delete punto.dibujar

//Consultar si un metodo sigue dentro de un objecto
if('dibujar'in punto){
    punto.dibujar()
}

//Devolver las propiedades de un objeto en array
console.log(Object.keys(punto))

for(let llave of Object.keys(punto)){
    console.log(llave,punto[llave])
}